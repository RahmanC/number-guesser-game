import React, { useState } from "react";
import { GuessForm } from "./components";

const App: React.FC = () => {
  const [guess, setGuess] = useState<string>("");

  const props = {
    guessesLeft: 0,
    guess: guess,
    gameOver: false,
    handleGuess: () => {},
    setGuess: setGuess,
    attempts: 1,
    secretNumber: 5,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 w-screen h-screen">
      <h1 className="text-2xl font-semibold mb-4">Number Guesser Game</h1>
      <GuessForm {...props} />
    </div>
  );
};

export default App;
