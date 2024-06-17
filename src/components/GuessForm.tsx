import Button from "./Button";

const GuessForm: React.FC<IGuessForm> = (props) => {
  return (
    <form
      onSubmit={props.handleGuess}
      className="flex flex-col gap-2 items-center rounded-2xl shadow-xl bg-white bg-opacity-35 p-6"
    >
      <p>
        Guess a number between <span className="font-bold">1</span> and{" "}
        <span className="font-bold">100</span>
      </p>
      <p>
        Attempts left:{" "}
        <span
          className={`${
            props.guessesLeft < 5 ? "text-red-600" : "text-green-600"
          } font-bold`}
        >
          {props.guessesLeft}
        </span>
      </p>
      <input
        className="w-full p-1 m-2 border border-gray-300 rounded-sm"
        type="number"
        value={props.guess}
        onChange={(e) => props.setGuess(e.target.value)}
        disabled={props.gameOver}
      />
      <Button title="guess" type="submit" disabled={props.gameOver} />
    </form>
  );
};

export default GuessForm;
