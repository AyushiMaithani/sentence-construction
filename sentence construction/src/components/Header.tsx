import { ArrowLeftIcon, MoreVertical } from "lucide-react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const Header = ({ title, showBackButton = false, onBack }: HeaderProps) => (
  <header className="flex items-center justify-between w-full p-6 bg-white">
    <div className="flex items-center gap-4">
      {showBackButton && (
        <button onClick={onBack}>
          <ArrowLeftIcon className="text-neutral-600" />
        </button>
      )}
      <h1 className="text-xl font-medium text-neutral-800">{title}</h1>
    </div>
    <MoreVertical className="text-neutral-600" />
  </header>
);

export default Header;
