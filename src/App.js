import "./App.css";
import Card from "./Card";
import TitleCard from "./TitleCard";

function App() {
  return (
    <div className="App">
      <div className="CardDeck">
        <TitleCard />
        <div className="timeCards">
          <Card activity="Work" time={32} history="Last Week - 36hrs" />
          <Card activity="Play" time={10} history="Last Week - 36hrs" />
          <Card activity="Play" time={10} history="Last Week - 36hrs" />
          <Card activity="Play" time={10} history="Last Week - 36hrs" />
          <Card activity="Play" time={10} history="Last Week - 36hrs" />
          <Card activity="Play" time={10} history="Last Week - 36hrs" />
        </div>
      </div>
    </div>
  );
}

export default App;
