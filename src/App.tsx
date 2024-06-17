import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, GuessForm } from "./components";
import { generateSecretNumber } from "./utils";

const App: React.FC = () => {
  const [guess, setGuess] = useState<string>("");
  const [gameState, setGameState] = useState<IGameState>({
    secretNumber: 0,
    attempts: 0,
    guessesLeft: 10,
    gameOver: false,
  });

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setGameState({
      secretNumber: generateSecretNumber(),
      attempts: 0,
      guessesLeft: 10,
      gameOver: false,
    });
    setGuess("");
  };

  const handleGuess = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const numGuess = parseInt(guess);

    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      toast.info("Please enter a valid number between 1 and 100.", {
        theme: "colored",
      });
      setGameState((prev) => ({
        ...prev,
      }));
      return;
    }

    const newAttempts = gameState.attempts + 1;
    const newGuessesLeft = gameState.guessesLeft - 1;

    if (numGuess === gameState.secretNumber) {
      toast.success(
        `Congratulations! You guessed the number in ${newAttempts} attempts.`,
        {
          theme: "colored",
        }
      );

      setGameState((prev) => ({
        ...prev,
        attempts: newAttempts,
        guessesLeft: newGuessesLeft,
        gameOver: true,
      }));
    } else if (newGuessesLeft === 0) {
      toast.error(
        `Game over! The secret number was ${gameState.secretNumber}.`,
        {
          theme: "colored",
        }
      );
      setGameState((prev) => ({
        ...prev,
        attempts: newAttempts,
        guessesLeft: newGuessesLeft,
        gameOver: true,
      }));
    } else if (numGuess < gameState.secretNumber) {
      toast.warn("Guess is too low! Try again.", {
        theme: "colored",
      });
      setGameState((prev) => ({
        ...prev,
        attempts: newAttempts,
        guessesLeft: newGuessesLeft,
      }));
    } else {
      toast.warn("Guess is too high! Try again.", {
        theme: "colored",
      });
      setGameState((prev) => ({
        ...prev,
        attempts: newAttempts,
        guessesLeft: newGuessesLeft,
      }));
    }

    setGuess("");
  };

  const props = {
    guessesLeft: gameState.guessesLeft,
    guess: guess,
    gameOver: gameState.gameOver,
    handleGuess: handleGuess,
    setGuess: setGuess,
    attempts: gameState.attempts,
    secretNumber: gameState.secretNumber,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 w-screen h-screen">
      <h1 className="text-2xl font-semibold mb-4">Number Guesser Game</h1>
      <GuessForm {...props} />

      <Button
        title="Start new game"
        onClick={startNewGame}
        className="w-[10%] bg-green-500 mt-5"
      />
    </div>
  );
};

export default App;
