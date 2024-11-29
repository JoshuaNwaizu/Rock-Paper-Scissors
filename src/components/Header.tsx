// import React from "react";

import { useGame } from "../contexts/GameContext";

const Header = () => {
  const { playerScore } = useGame();
  return (
    <header className="md:flex md:justify-center">
      <div className="flex h-[6rem] items-center justify-between rounded border border-white px-4 md:w-[43.75rem]">
        <img src="/assets/logo.svg" alt="" className="h-[3.5rem]" />

        <div
          className="flex h-[4.5rem] w-[5rem] flex-col items-center justify-center rounded tracking-[0.09769rem] text-[#565468]"
          style={{ background: "linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)" }}
        >
          <span className="text-[0.625rem]">Score</span>
          <span className="text-[2.5rem] font-bold leading-[2.5rem]">
            {playerScore}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
