import Gestures from "./components/Gestures";
import Header from "./components/Header";
import Rules from "./components/Rules";
import RulesComponent from "./components/RulesComponent";

const App = () => {
  return (
    <div className="relative mx-6 my-6 h-svh">
      <Header />

      <Gestures />
      <div className="absolute -right-[1.5rem] bottom-[4.5rem] mx-6 flex w-full items-center justify-center lg:justify-end">
        <Rules />
      </div>
      <RulesComponent />
    </div>
  );
};

export default App;
