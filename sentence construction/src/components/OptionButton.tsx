interface OptionButtonProps {
  option: string;
  disabled?: boolean;
  onClick: () => void;
}

const OptionButton = ({ option, disabled = false, onClick }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg transition-colors ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-[#f8f8f8] hover:bg-[#e0e0e0] text-black"
      }`}
    >
      {option}
    </button>
  );
};

export default OptionButton;
