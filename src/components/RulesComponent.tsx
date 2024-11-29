import { useGame } from "../contexts/GameContext";

const RulesComponent = () => {
  const { openRules, dispatch } = useGame();
  return (
    <div
      className={`fixed inset-0 ${openRules ? "flex" : "hidden"} items-center justify-center bg-white bg-opacity-75`}
    >
      <div className="flex flex-col items-center justify-center gap-[4rem] rounded-lg bg-white p-8 shadow-lg lg:h-[25.9375rem] lg:w-[25rem]">
        <h1 className="text-4xl font-bold uppercase leading-8">Rules</h1>
        <img src="/assets/image-rules.svg" alt="Rules" />
        <button
          onClick={() => dispatch({ type: "OPEN_RULES" })}
          className="absolute right-4 top-4"
        >
          <img src="assets/icon-close.svg" alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default RulesComponent;
