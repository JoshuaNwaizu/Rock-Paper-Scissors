import { useGame } from "../contexts/GameContext";

const Rules = () => {
  const { dispatch } = useGame();

  return (
    <button
      className="h-[2.5rem] w-[8rem] rounded border border-white text-white"
      onClick={() => dispatch({ type: "OPEN_RULES" })}
    >
      Rules
    </button>
  );
};

export default Rules;
