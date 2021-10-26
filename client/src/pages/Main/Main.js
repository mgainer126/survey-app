import Summary from "../../components/Summary/Summary";
import retro from "../../assets/Agile-Retro.png";
import "../Main/Main.scss";

function Main() {
  return (
    <div className="main">
      <Summary />
      <img src={retro} alt="retro" />
    </div>
  );
}

export default Main;
