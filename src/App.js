import "./App.css";
import Card from "./Card";
import TitleCard from "./TitleCard";

// - Light red (work): hsl(15, 100%, 70%)
// - Soft blue (play): hsl(195, 74%, 62%)
// - Light red (study): hsl(348, 100%, 68%)
// - Lime green (exercise): hsl(145, 58%, 55%)
// - Violet (social): hsl(264, 64%, 52%)
// - Soft orange (self care): hsl(43, 84%, 65%)

function App() {
  return (
    <div className="App">
      <div className="CardDeck">
        <TitleCard />
        <div className="timeCards">
          <Card
            style={{ backgroundColor: "hsl(15, 100%, 70%)" }}
            activity="Work"
            time={32}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(195, 74%, 62%)" }}
            activity="Play"
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(348, 100%, 68%)" }}
            activity="Play"
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(145, 58%, 55%)" }}
            activity="Play"
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(264, 64%, 52%)" }}
            activity="Play"
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(43, 84%, 65%)" }}
            activity="Play"
            time={10}
            history="Last Week - 36hrs"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
