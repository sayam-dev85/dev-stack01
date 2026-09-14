import { FiX } from "react-icons/fi";
import type { Technology } from "../types/technology";

interface StackItemProps {
    technology: Technology;
    onRemove: (id: string) => void;
}

const StackItem = ({ technology, onRemove }: StackItemProps) => {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3">
            {/* Technology icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2">
                <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-full w-full object-contain"
                />
            </div>

            {/* Technology information */}
            <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-gray-800">
                    {technology.name}
                </h4>

                <p className="text-xs text-gray-400">
                    {technology.category}
                </p>
            </div>

            {/* Remove button */}
            <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            >
                <FiX className="text-lg" />
            </button>
        </div>
    );
};

export default StackItem;