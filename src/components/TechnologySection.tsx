import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

const TechnologySection = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                const response = await fetch("/technologies.json");

                if (!response.ok) {
                    throw new Error("Could not load technologies");
                }

                const data: Technology[] = await response.json();

                setTechnologies(data);
            } catch (error) {
                console.error("Error loading technologies:", error);
            } finally {
                setLoading(false);
            }
        };

        loadTechnologies();
    }, []);

    return (
        <section
            id="technologies"
            className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-8"
        >
            <div className="mx-auto max-w-[1240px]">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Choose the technologies you want to include in your development
                        stack.
                    </p>
                </div>

                {loading ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                        <div className="flex items-center gap-3 text-gray-500">
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-pink-500" />

                            <span className="text-sm font-medium">
                                Loading technologies...
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TechnologySection;