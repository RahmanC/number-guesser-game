interface IGuessForm {
  guess: string;
  setGuess: (arg: string) => void;
  secretNumber: number;
  attempts: number;
  guessesLeft: number;
  gameOver: boolean;
  handleGuess: (e) => void;
}

interface IButton {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

interface IGameState {
  secretNumber: number;
  attempts: number;
  guessesLeft: number;
  gameOver: boolean;
}
