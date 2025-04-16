
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ScoreCircle = ({ percentageScore }: { percentageScore: number }) => {
  return (
    <div className="w-28 h-28">
      <CircularProgressbar
        value={percentageScore}
        text={`${percentageScore}%`}
        styles={buildStyles({
          textColor: '#1f2937', // Tailwind's neutral-800
          pathColor: '#22c55e', // Tailwind's green-500
          trailColor: '#e5e7eb', // Tailwind's neutral-200
          textSize: '18px',
          strokeLinecap: 'round',
        })}
      />
    </div>
  );
};

export default ScoreCircle;
