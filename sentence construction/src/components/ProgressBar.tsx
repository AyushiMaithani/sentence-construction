interface ProgressBarProps {
    current: number;
    total: number;
  }
  
  const ProgressBar = ({ current, total }: ProgressBarProps) => {
    const percent = (current / total) * 100;
  
    return (
      <div className="w-full bg-neutral-200 rounded-full h-2">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
    );
  };
  
  export default ProgressBar;
  