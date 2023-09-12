import "./App.css";
import Card from "./components/Card/Card";
import HackedText from "./components/HackedText/HackedText";

function App() {
  return (
    <>
      <div>
        {/* <Card /> */}
        <HackedText text="SUPERLONG" />
        <Card />
      </div>
    </>
  );
}

export default App;
