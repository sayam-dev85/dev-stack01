import { FiStar } from "react-icons/fi";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    isAdded: boolean;
    onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
    technology,
    isAdded,
    onAdd,
}: TechnologyCardProps) => {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Icon and badge */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-2.5">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} logo`}
                        className="h-full w-full object-contain"
                    />
                </div>

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-500">
                    {technology.badge}
                </span>
            </div>

            {/* Technology information */}
            <div className="mt-5 flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                    {technology.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                    {technology.description}
                </p>
            </div>

            {/* Category, difficulty and rating */}
            <div className="mt-5 flex items-center gap-2">
                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                    {technology.category}
                </span>

                <span className="rounded-md bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-600">
                    {technology.difficulty}
                </span>

                <div className="ml-auto flex shrink-0 items-center gap-1.5 text-sm">
                    <FiStar className="fill-yellow-400 text-yellow-400" />

                    <span className="font-semibold text-gray-800">
                        {technology.rating}
                    </span>

                    <span className="text-gray-400">/ 5.0</span>
                </div>
            </div>

            {/* Add button */}
            <button
                type="button"
                disabled={isAdded}
                onClick={() => onAdd(technology)}
                className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${isAdded
                        ? "cursor-not-allowed bg-gray-100 text-gray-400"
                        : "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </article>
    );
};

export default TechnologyCard;