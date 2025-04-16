interface BlankSlotProps {
  value?: string;
  onClick: () => void;
}

const BlankSlot = ({ value, onClick }: BlankSlotProps) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 border border-[#bfc6c6] rounded-lg text-sm"
    >
      {value || "____"}
    </button>
  );
};

export default BlankSlot;
