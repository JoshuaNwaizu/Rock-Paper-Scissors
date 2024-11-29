import { useEffect, useState } from "react";
import { useGame } from "../contexts/GameContext";
import PreStep from "./PreStep";

interface Options {
  name: string;
  url: string;
}
const options: Options[] = [
  { name: "paper", url: "/assets/paper.svg" },
  { name: "scissors", url: "/assets/scissors.svg" },
  { name: "rock", url: "/assets/rock.svg" },
];
const className =
  "flex h-[9.125rem] w-[9.125rem] items-center justify-center rounded-full";

const Gestures = () => {
  const { dispatch, playerScore, computerScore, startGame } = useGame();
  const [playersChoice, setPlayersChoice] = useState<Options | null>(null);
  const [computerChoice, setComputerChoice] = useState<Options | null>(null);
  const [messages, setMessages] = useState<string>("");
  //   const choices = options.map((item) => item.name);

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const playRound = (player: Options, computer: Options) => {
    if (player === computer) {
      setMessages("It's a tie");
      console.log("its a tie");

      console.log("It's a tie!");
      dispatch({ type: "COMPUTER_CHOICE", payload: computer.name });
    } else if (
      (player.name === "rock" && computer.name === "scissors") ||
      (player.name === "scissors" && computer.name === "paper") ||
      (player.name === "paper" && computer.name === "rock")
    ) {
      dispatch({
        type: "UPDATE_SCORE",
        payload: { playerScore: 1, computerScore: 0 },
      });
      setMessages("You won");
      console.log("You win!");
    } else {
      setMessages("You lose");
      console.log("Computer wins");
      dispatch({
        type: "UPDATE_SCORE",
        payload: { playerScore: -1, computerScore: 1 },
      });
    }
  };

  const handleChooseOption = (choice: Options) => {
    dispatch({ type: "START_GAME" });
    const computerSelected = getComputerChoice();
    setTimeout(() => {
      console.log(
        `Computer choose ${computerSelected.name} and scored: ${computerScore}`,
      );
    }, 3000);

    setPlayersChoice(choice);
    setComputerChoice(computerSelected);
    playRound(choice, computerSelected);
  };

  useEffect(() => {
    console.log(
      `Joshua chose: ${playersChoice?.name} and scored ${playerScore}`,
    );
  }, [playersChoice]);
  return (
    <div className="relative mt-[4rem] flex flex-col items-center justify-center">
      {!startGame ? (
        <div className="relative flex h-[14.5625rem] w-[19.5rem] flex-col items-center justify-center">
          <img
            src="assets/bg-triangle.svg"
            alt=""
            className="h-[10.375rem] w-[10.375rem]"
          />
          <div className="absolute -top-6 flex flex-col items-center gap-2">
            <div className="flex w-full justify-between gap-[2rem]">
              {options.slice(0, 2).map((option) => (
                <span
                  key={option.name}
                  className={className}
                  onClick={() => handleChooseOption(option)}
                >
                  <img src={option.url} alt={option.name} />
                </span>
              ))}
            </div>
            <span
              className={className}
              onClick={() => handleChooseOption(options[2])}
            >
              <img src={options[2].url} alt={options[2].name} />
            </span>
          </div>
        </div>
      ) : (
        <PreStep
          playerName={playersChoice?.name}
          playerUrl={playersChoice?.url}
          computerName={computerChoice?.name}
          computerUrl={computerChoice?.url}
          messages={messages}
        />
      )}
    </div>
  );
};

export default Gestures;
