import "./App.css";
import Card from "./Card";
import TitleCard from "./TitleCard";
import data from "./data.json";
import workLogo from "./images/icon-work.svg";
import studyLogo from "./images/icon-study.svg";
import playLogo from "./images/icon-play.svg";
import exerLogo from "./images/icon-exercise.svg";
import sociLogo from "./images/icon-social.svg";
import careLogo from "./images/icon-self-care.svg";

function App() {
  const [work, play, study, exer, soci, care] = data;

  const getThisWeekHours = (activity) => {
    // given the activity, give the string displaying time spent on that activity
    const hoursSpent = `${activity.timeframes.weekly.current}hrs`;
    return hoursSpent;
  };

  const getLastWeekHours = (activity) => {
    const hoursSpent = `Last Week - ${activity.timeframes.weekly.previous}hrs`;
    return hoursSpent;
  };

  return (
    <div className="App">
      <div className="CardDeck">
        <TitleCard />
        <div className="timeCards">
          <Card
            style={{
              backgroundColor: "hsl(15, 100%, 70%)",
              backgroundImage: `url(${workLogo})`,
            }}
            activity={work.title}
            time={getThisWeekHours(work)}
            history={getLastWeekHours(work)}
          />
          <Card
            style={{
              backgroundColor: "hsl(195, 74%, 62%)",
              backgroundImage: `url(${playLogo})`,
            }}
            activity={play.title}
            time={getThisWeekHours(play)}
            history={getLastWeekHours(play)}
          />
          <Card
            style={{
              backgroundColor: "hsl(348, 100%, 68%)",
              backgroundImage: `url(${studyLogo})`,
            }}
            activity={study.title}
            time={getThisWeekHours(study)}
            history={getLastWeekHours(study)}
          />
          <Card
            style={{
              backgroundColor: "hsl(145, 58%, 55%)",
              backgroundImage: `url(${exerLogo})`,
            }}
            activity={exer.title}
            time={getThisWeekHours(exer)}
            history={getLastWeekHours(exer)}
          />
          <Card
            style={{
              backgroundColor: "hsl(264, 64%, 52%)",
              backgroundImage: `url(${sociLogo})`,
            }}
            activity={soci.title}
            time={getThisWeekHours(soci)}
            history={getLastWeekHours(soci)}
          />
          <Card
            style={{
              backgroundColor: "hsl(43, 84%, 65%)",
              backgroundImage: `url(${careLogo})`,
            }}
            activity={care.title}
            time={getThisWeekHours(care)}
            history={getLastWeekHours(care)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
