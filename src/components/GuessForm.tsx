import Button from "./Button";

const GuessForm: React.FC<IGuessForm> = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center rounded-2xl shadow-xl bg-white bg-opacity-35 p-6">
      <p>Guess a number between 1 and 100</p>
      <p>Attempts left: {props.guessesLeft}</p>
      <input
        className="w-full p-1 m-2 border border-gray-300 rounded-sm"
        type="number"
        value={props.guess}
        onChange={(e) => props.setGuess(e.target.value)}
        disabled={props.gameOver}
      />
      <Button
        title="guess"
        onClick={props.handleGuess}
        disabled={props.gameOver}
      />
    </div>
  );
};

export default GuessForm;
