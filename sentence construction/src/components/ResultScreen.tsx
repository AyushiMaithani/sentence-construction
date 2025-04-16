import { ArrowLeftIcon, MoreVertical } from "lucide-react";
import ScoreCircle from "./scoreRing";
import { Question } from "../data/questions";

interface ResultScreenProps {
  questions: Question[];
  score: number;
  answers: string[][];
  questionResults: { correct: boolean }[];
  onRetry: () => void;
}

const ResultScreen = ({ questions, score, answers, questionResults, onRetry }: ResultScreenProps) => {
  const percentageScore = Math.round((score / questions.length) * 100);
console.log("Percentage Score:", percentageScore); 
console.log("Score:", score);

  return (
    <main className="flex flex-row justify-center w-full min-h-screen bg-[#f8f8f8]">
      <div className="bg-back-ground w-full ">
        <div className="flex flex-col w-full items-center gap-14 rounded-3xl shadow-DS-3 ">
          <div className="bg-white flex items-center justify-between w-full p-6">
            <div className="flex items-center gap-4">
              <button onClick={() => window.history.back()}>
                <ArrowLeftIcon className="text-neutral-600" />
              </button>
              <h1 className="text-xl font-medium text-neutral-800">Sentence Construction</h1>
            </div>
            <MoreVertical className="text-neutral-600" />
          </div>

          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col items-center justify-center">
              <ScoreCircle percentageScore={percentageScore} />
              <span className="mb-5 mt-5 text-sm text-neutral-600">Overall Score</span>
            </div>

            <p className="text-neutral-600 text-center max-w-[600px]">
              While you correctly formed several sentences, there are areas to improve. Review your responses below.
            </p>

            <button onClick={onRetry} className="px-6 py-2 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-50">
              Retry Test
            </button>

            <div className="w-full mt-4 flex flex-col items-center">
              {questions.map((question, index) => (
                <div key={question.questionId} className=" bg-white rounded-xl m-5 w-[40vw] p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-neutral-600">Prompt</span>
                    <span className="text-neutral-600">{index + 1}/{questions.length}</span>
                  </div>
                  <p className="text-neutral-800 mb-4">{question.question}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-600">Your response:</span>
                    <span className={questionResults[index]?.correct ? "text-green-500" : "text-red-500"}>
                      {questionResults[index]?.correct ? "Correct" : "Incorrect"}
                    </span>
                  </div>
                  <p className="text-neutral-800 mt-2">{answers[index]?.join(" ") || "No answer provided"}</p>
                  {!questionResults[index]?.correct && (
                    <p className="text-sm text-neutral-500 mt-1">
                      Correct answer: {question.correctAnswer.join(" ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultScreen;
