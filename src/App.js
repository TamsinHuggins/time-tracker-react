import "./App.css";
import Card from "./Card";
import TitleCard from "./TitleCard";
import data from "./data.json";

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
            activity={data[0].title}
            time={data[0].timeframes.weekly.current}
            history={
              "Last Week - " + data[0].timeframes.weekly.previous + "hrs"
            }
          />
          <Card
            style={{ backgroundColor: "hsl(195, 74%, 62%)" }}
            activity={data[1].title}
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(348, 100%, 68%)" }}
            activity={data[2].title}
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(145, 58%, 55%)" }}
            activity={data[3].title}
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(264, 64%, 52%)" }}
            activity={data[4].title}
            time={10}
            history="Last Week - 36hrs"
          />
          <Card
            style={{ backgroundColor: "hsl(43, 84%, 65%)" }}
            activity={data[5].title}
            time={10}
            history="Last Week - 36hrs"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
