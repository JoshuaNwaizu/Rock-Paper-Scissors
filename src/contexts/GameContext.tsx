import React, { Children, createContext, useContext, useReducer } from "react";

interface Children {
  children: React.ReactNode;
}

interface ContextData {
  playerScore: number;
  computerScore: number;
  dispatch: React.Dispatch<Actions>;
  playerChoice: null | string;
  computerChoice: null | string;
  startGame: boolean;
  openRules: boolean;
}

interface State {
  playerScore: number;
  computerScore: number;
  playerChoice: null | string;
  computerChoice: null | string;
  startGame: boolean;
  openRules: boolean;
}
interface Actions {
  type: string;
  payload?: any;
}

const GameContext = createContext<ContextData | undefined>(undefined);

const initialState = {
  playerScore: 0,
  computerScore: 0,
  startGame: false,
  playerChoice: null as string | null,
  computerChoice: null as string | null,
  openRules: false,
};

const reducer: React.Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "PLAYER_CHOICE":
      return { ...state, playerChoice: action.payload };
    case "COMPUTER_CHOICE":
      return {
        ...state,
        computerChoice: action.payload,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        playerScore: state.playerScore + action.payload.playerScore,
        computerScore: state.computerScore + action.payload.computerScore,
      };
    case "START_GAME":
      return { ...state, startGame: true };
    case "END_GAME":
      return {
        ...state,
        startGame: false,
        playerChoice: null,
        computerChoice: null,
      };
    case "OPEN_RULES":
      return { ...state, openRules: !state.openRules };

    default:
      return state;
  }
};

const GameProvider: React.FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    playerScore,
    computerScore,
    computerChoice,
    playerChoice,
    startGame,
    openRules,
  } = state;

  return (
    <GameContext.Provider
      value={{
        playerScore,
        dispatch,
        computerScore,
        playerChoice,
        computerChoice,
        startGame,
        openRules,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) throw new Error("Can't access this outside");
  return context;
};

export { GameProvider, useGame };
