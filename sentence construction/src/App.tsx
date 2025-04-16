import { useEffect, useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import ResultScreen from "./components/ResultScreen";
import QuestionCard from "./components/QuestionCard";
import useQuestions from "./data/questions"; // custom hook

export default function App() {
  const QUESTION_TIME_LIMIT = 30;
  const { questions, loading, error } = useQuestions();

  const [screen, setScreen] = useState("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [questionResults, setQuestionResults] = useState<Array<{ correct: boolean }>>([]);
  const [score, setScore] = useState(0);

  

  // Initialize answers when questions are loaded
  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(new Array(questions.length).fill([]));
    }
  }, [questions]);

  useEffect(() => {
    if (screen !== "test") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return QUESTION_TIME_LIMIT;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [screen, currentQuestionIndex]);

  useEffect(() => {
    setTimeLeft(QUESTION_TIME_LIMIT);
  }, [currentQuestionIndex]);

  const checkAnswer = (user: string[], correct: string[]) => {
    return user.length === correct.length && user.every((val, i) => val === correct[i]);
  };

  const handleNextQuestion = () => {
    const currentAnswer = answers[currentQuestionIndex];
    const isCorrect = checkAnswer(currentAnswer, questions[currentQuestionIndex].correctAnswer);
    setQuestionResults((prev) => [...prev, { correct: isCorrect }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScore(questionResults.filter((res) => res.correct).length + (isCorrect ? 1 : 0));
      setScreen("results");
    }
  };

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>Error loading questions: {error}</div>;

  if (screen === "welcome") return <WelcomeScreen onStart={() => setScreen("test")} />;
  if (screen === "results")
    return (
      <ResultScreen
        questions={questions}
        score={score}
        answers={answers}
        questionResults={questionResults}
        onRetry={() => {
          setCurrentQuestionIndex(0);
          setAnswers(new Array(questions.length).fill([]));
          setQuestionResults([]);
          setScore(0);
          setScreen("test");
        }}
      />
    );

  return (
    <QuestionCard
      onQuit={() => setScreen("results")}
      currentQuestionIndex={currentQuestionIndex}
      question={questions[currentQuestionIndex]}
      totalQuestions={questions.length}
      timeLeft={timeLeft}
      answers={answers}
      setAnswers={setAnswers}
      onNextQuestion={handleNextQuestion}
    />
  );
}
