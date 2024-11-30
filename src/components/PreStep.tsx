import React, { useEffect, useState } from "react";
import { useGame } from "../contexts/GameContext";

interface PreStepProps {
  playerName?: string;
  playerUrl?: string;
  computerName?: string;
  computerUrl?: string;
  messages?: string;
}
const PreStep: React.FC<PreStepProps> = ({
  playerName,
  playerUrl,
  computerName,
  computerUrl,
  messages,
}) => {
  const { dispatch } = useGame();
  const [showComputer, setShowComputer] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComputer(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[3rem]">
      <div className="flex w-full justify-between md:justify-center md:gap-8 lg:items-center">
        <span className="flex flex-col items-center lg:gap-[2rem]">
          <img
            src={playerUrl}
            alt={playerName}
            className="h-[8.125rem] w-[8.125rem] lg:order-1 lg:h-[17.91869rem] lg:w-[18.28819rem]"
          />
          <p className="text-[0.9375rem] font-bold uppercase leading-8 tracking-[0.11719rem] text-white">
            You picked
          </p>
        </span>

        <div className="item-center flex flex-col max-sm:hidden">
          {showComputer && (
            <>
              <h1 className="text-[3.5rem] font-bold uppercase text-white">
                {messages}
              </h1>
              <button
                className="h-[3rem] w-[13.75rem] rounded uppercase tracking-[0.15625rem]"
                style={{
                  background: "linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)",
                }}
                onClick={() => dispatch({ type: "END_GAME" })}
              >
                Play again
              </button>
            </>
          )}
        </div>

        <span className="flex flex-col items-center lg:gap-[2rem]">
          {showComputer ? (
            <img
              src={computerUrl}
              alt={computerName}
              className="h-[8.125rem] w-[8.125rem] lg:order-1 lg:h-[17.91869rem] lg:w-[18.28819rem]"
            />
          ) : (
            <img
              src="assets/empty-cover.svg"
              alt="empty cover"
              className="h-[8.125rem] w-[8.125rem] lg:order-1 lg:h-[17.91869rem] lg:w-[18.28819rem]"
            />
          )}

          <p className="text-[0.9375rem] font-bold uppercase leading-8 tracking-[0.11719rem] text-white">
            The house picked
          </p>
        </span>
      </div>

      <div className="flex flex-col items-center md:hidden">
        {showComputer && (
          <>
            <h1 className="text-[3.5rem] font-bold uppercase text-white">
              {messages}
            </h1>
            <button
              className="h-[3rem] w-[13.75rem] rounded uppercase tracking-[0.15625rem]"
              style={{
                background: "linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)",
              }}
              onClick={() => dispatch({ type: "END_GAME" })}
            >
              Play again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PreStep;
