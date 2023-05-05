import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="CardDeck">
        <Card activity="Work" time={32} history="Last Week - 36hrs" />
        <Card activity="Play" time={10} history="Last Week - 36hrs" />
        <Card activity="Play" time={10} history="Last Week - 36hrs" />
        <Card activity="Play" time={10} history="Last Week - 36hrs" />
        <Card activity="Play" time={10} history="Last Week - 36hrs" />
        <Card activity="Play" time={10} history="Last Week - 36hrs" />
      </div>
    </div>
  );
}

export default App;
