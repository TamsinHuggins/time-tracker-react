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

  let timeFrame = "weekly";

  const getHours = (activity, timeFrame) => {
    /**
     *  given an activity and a timeFrame (daily, weekly or monthly), return an array. Hours spent this timFrame at position 0, hours spent last timeFrame at position 1
     * @param {Object} activity
     * @param {String} timeFrame
     * @return {Array} [thisHours, prevHours]
     *      */

    if (timeFrame === "daily") {
      let thisHours = `${activity.timeframes.daily.current}hrs`;
      let prevHours = `Last Week - ${activity.timeframes.daily.previous}hrs`;
      return [thisHours, prevHours];
    } else if (timeFrame === "weekly") {
      let thisHours = `${activity.timeframes.weekly.current}hrs`;
      let prevHours = `Last Week - ${activity.timeframes.weekly.previous}hrs`;
      return [thisHours, prevHours];
    } else {
      let thisHours = `${activity.timeframes.monthly.current}hrs`;
      let prevHours = `Last Week - ${activity.timeframes.monthly.previous}hrs`;
      return [thisHours, prevHours];
    }
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
            time={getHours(work, timeFrame)[0]}
            history={getHours(work, timeFrame)[1]}
          />
          <Card
            style={{
              backgroundColor: "hsl(195, 74%, 62%)",
              backgroundImage: `url(${playLogo})`,
            }}
            activity={play.title}
            time={getHours(play, timeFrame)[0]}
            history={getHours(play, timeFrame)[1]}
          />
          <Card
            style={{
              backgroundColor: "hsl(348, 100%, 68%)",
              backgroundImage: `url(${studyLogo})`,
            }}
            activity={study.title}
            time={getHours(study, timeFrame)[0]}
            history={getHours(study, timeFrame)[1]}
          />
          <Card
            style={{
              backgroundColor: "hsl(145, 58%, 55%)",
              backgroundImage: `url(${exerLogo})`,
            }}
            activity={exer.title}
            time={getHours(exer, timeFrame)[0]}
            history={getHours(exer, timeFrame)[1]}
          />
          <Card
            style={{
              backgroundColor: "hsl(264, 64%, 52%)",
              backgroundImage: `url(${sociLogo})`,
            }}
            activity={soci.title}
            time={getHours(soci, timeFrame)[0]}
            history={getHours(soci, timeFrame)[1]}
          />
          <Card
            style={{
              backgroundColor: "hsl(43, 84%, 65%)",
              backgroundImage: `url(${careLogo})`,
            }}
            activity={care.title}
            time={getHours(care, timeFrame)[0]}
            history={getHours(care, timeFrame)[1]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
