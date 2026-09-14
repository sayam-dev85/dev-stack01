import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import type { Technology } from "./types/technology";

function App() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setSelectedStack((currentStack) => [
      ...currentStack,
      technology,
    ]);
  };

  const handleRemoveFromStack = (id: string) => {
    setSelectedStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          selectedStack={selectedStack}
          onAddToStack={handleAddToStack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </main>
    </>
  );
}

export default App;