// src/components/WelcomeScreen.tsx
import { MoreVertical } from "lucide-react";
import icon from "../assets/Icons.png";


interface Props {
  onStart: () => void;
}

const TOTAL_COINS = 10; 
const QUESTION_TIME_LIMIT = 30;          


const WelcomeScreen = ({ onStart }: Props) => {
  return (
    <main className="flex flex-row justify-center w-full min-h-screen bg-[#f8f8f8]">
      <div className="bg-back-ground w-full">
        <div className="flex flex-col w-full items-center gap-14 mx-auto rounded-3xl shadow-DS-3">
          <div className="flex items-center justify-between w-full bg-white p-6">
            <h1 className="text-2xl font-medium text-neutral-800">Sentence Construction</h1>
            <MoreVertical className="text-neutral-600" />
          </div>

          <div className="flex flex-col mt-20 items-center gap-8 text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
              <img src={icon} alt="Icon" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium text-neutral-800">Sentence Construction</h2>
              <p className="text-neutral-600">
                Select the correct words to complete the sentence by arranging the provided options in the right order.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 w-full max-w-[600px] mt-8">
              <Stat label="Time Per Question" value={`${QUESTION_TIME_LIMIT} sec`} />
              <Stat label="Total Questions" value={"10"} />
              <Stat label="Coins" value={`● ${TOTAL_COINS}`} className="text-yellow-400" />
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-50">Back</button>
            <button onClick={onStart} className="px-6 py-2 rounded-lg bg-[#453fe1] hover:bg-[#3733c2] text-white">
              Start
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

const Stat = ({ label, value, className = "" }: { label: string; value: string; className?: string }) => (
  <div className="flex flex-col items-center gap-2">
    <h3 className="text-neutral-600">{label}</h3>
    <p className={`text-xl font-medium text-neutral-800 ${className}`}>{value}</p>
  </div>
);

export default WelcomeScreen;
