import type { Technology } from "../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
    selectedStack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const StackSidebar = ({
    selectedStack,
    onRemove,
    onRemoveAll,
}: StackSidebarProps) => {
    return (
        <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            {/* Sidebar heading */}
            <div>
                <h3 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                    {selectedStack.length}{" "}
                    {selectedStack.length === 1
                        ? "Technology Selected"
                        : "Technologies Selected"}
                </p>
            </div>

            {/* Empty state */}
            {selectedStack.length === 0 ? (
                <div className="mt-5 rounded-xl border border-dashed border-gray-200 px-5 py-10 text-center">
                    <p className="text-sm text-gray-400">
                        Your stack is empty.
                    </p>
                </div>
            ) : (
                <>
                    {/* Selected technologies */}
                    <div className="mt-5 space-y-3">
                        {selectedStack.map((technology) => (
                            <StackItem
                                key={technology.id}
                                technology={technology}
                                onRemove={onRemove}
                            />
                        ))}
                    </div>

                    {/* Remove all */}
                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
                    >
                        Remove All
                    </button>
                </>
            )}
        </aside>
    );
};

export default StackSidebar;