import "./App.css";
import Card from "./Card";
import TitleCard from "./TitleCard";
import data from "./data.json";

console.log(data.length);

function App() {
  const [work, play, study, exer, soci, care] = data;

  const getHoursSpent = (activity) => {
    // given the activity, give the string displaying time spent on that activity
    const hoursSpent = `${activity.timeframes.weekly.current}hrs`;
    return hoursSpent;
  };

  const getHoursSpentPrev = (activity) => {
    const hoursSpent = `Last Week - ${activity.timeframes.weekly.previous}hrs`;
    return hoursSpent;
  };

  return (
    <div className="App">
      <div className="CardDeck">
        <TitleCard />
        <div className="timeCards">
          <Card
            style={{ backgroundColor: "hsl(15, 100%, 70%)" }}
            activity={work.title}
            time={getHoursSpent(work)}
            history={getHoursSpentPrev(work)}
          />
          <Card
            style={{ backgroundColor: "hsl(195, 74%, 62%)" }}
            activity={play.title}
            time={getHoursSpent(play)}
            history={getHoursSpentPrev(play)}
          />
          <Card
            style={{ backgroundColor: "hsl(348, 100%, 68%)" }}
            activity={study.title}
            time={getHoursSpent(study)}
            history={getHoursSpentPrev(study)}
          />
          <Card
            style={{ backgroundColor: "hsl(145, 58%, 55%)" }}
            activity={exer.title}
            time={getHoursSpent(exer)}
            history={getHoursSpentPrev(exer)}
          />
          <Card
            style={{ backgroundColor: "hsl(264, 64%, 52%)" }}
            activity={soci.title}
            time={getHoursSpent(soci)}
            history={getHoursSpentPrev(soci)}
          />
          <Card
            style={{ backgroundColor: "hsl(43, 84%, 65%)" }}
            activity={care.title}
            time={getHoursSpent(care)}
            history={getHoursSpentPrev(care)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
