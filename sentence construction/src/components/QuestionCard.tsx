import { ArrowRightIcon } from "lucide-react";
import { Question } from "../data/questions";

interface QuestionCardProps {
  currentQuestionIndex: number;
  question: Question;
  totalQuestions: number;
  timeLeft: number;
  answers: string[][];

  setAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
  onNextQuestion: () => void;
  onQuit: () => void;
}

const QuestionCard = ({
  currentQuestionIndex,
  question,
  totalQuestions,
  timeLeft,
  answers,
  setAnswers,
  onNextQuestion,
  onQuit,
}: QuestionCardProps) => {
  const questionParts = question.question.split("_____________");
  const currentAnswers = answers[currentQuestionIndex] || [];

  const handleOptionSelect = (option: string) => {
    const updatedAnswers = [...answers];
    const current = [...(updatedAnswers[currentQuestionIndex] || [])];
    const blankIndex = current.length;
    if (!current.includes(option) && blankIndex < questionParts.length - 1) {
      current[blankIndex] = option;
      updatedAnswers[currentQuestionIndex] = current;
      setAnswers(updatedAnswers);
    }
  };

  const handleUnselect = (blankIndex: number) => {
    const updatedAnswers = [...answers];
    const current = [...(updatedAnswers[currentQuestionIndex] || [])];
    current.splice(blankIndex, 1);
    updatedAnswers[currentQuestionIndex] = current;
    setAnswers(updatedAnswers);
  };

  return (
    <main className="bg-[#f8f8f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f8f8f8] w-full max-w-[1366px]">
        <div className="flex flex-col w-full max-w-[975px] items-center gap-14 p-10 mx-auto mt-[116px] bg-[#ffffff] rounded-3xl shadow-[0px_4px_50px_rgba(69,69,69,0.07)]">
          {/* Header Row */}
          <div className="flex items-center justify-between w-full">
            <span className="text-[24px] font-medium text-[#616464]">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium text-[#616464]">Time Left: {timeLeft}s</span>
              <button
                onClick={onQuit}
                className="px-4 py-2 border border-[#dee3e3] rounded-lg text-[#2a2d2d] font-medium hover:bg-gray-50"
              >
                Quit
              </button>
            </div>
          </div>

          {/* Instructions */}
          <h2 className="text-[20px] font-normal text-[#616464] text-center w-full">
            Select the missing words in the correct order
          </h2>

          {/* Question Sentence */}
          <div className="flex flex-wrap max-w-[811px] items-end gap-[20px_18px] justify-center">
            {questionParts.map((part, index) => (
              <span key={index} className="flex items-center gap-2">
                {part}
                {index < questionParts.length - 1 && (
                  <button
                    className="px-3 py-2 border border-solid border-[#bfc6c6] rounded-lg"
                    onClick={() => handleUnselect(index)}
                  >
                    {currentAnswers[index] || "____________"}
                  </button>
                )}
              </span>
            ))}
          </div>

          {/* Option Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${
                  currentAnswers.includes(option)
                    ? "bg-[#bfc6c6] text-[#616464]"
                    : "bg-[#f8f8f8] hover:bg-[#dfe3e3]"
                }`}
                onClick={() => handleOptionSelect(option)}
                disabled={currentAnswers.includes(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="w-full flex justify-end">
            <button
              onClick={onNextQuestion}
              disabled={currentAnswers.length !== questionParts.length - 1}
              className={`w-16 h-16 flex items-center justify-center rounded-xl ${
                currentAnswers.length === questionParts.length - 1
                  ? "bg-[#453fe1] text-white hover:bg-[#3733c2]"
                  : "bg-[#dfe3e3] text-[#a0a0a0] cursor-not-allowed"
              }`}
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuestionCard;
