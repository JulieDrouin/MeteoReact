import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Home.module.css";
import useTemperature from "./../useTemperature";

const Home = () => {
  const [city, setCity] = useState("");
  let history = useHistory();
  const fetchTemperature = useTemperature();
  const GetTemperature = async (e) => {
    e.preventDefault();
    const temp = await fetchTemperature(city);
    history.push(`/result?t=${temp}`);
  };
  return (
    <div className={classes.infoHome}>
      <h1>Météo React</h1>
      <form onSubmit={(e) => GetTemperature(e)}>
        <label>Nom de la ville:</label>
        <input
          type="text"
          placeholder="Brest"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={classes.Button} type="submit">
          Confirmer
        </button>
      </form>
    </div>
  );
};
export default Home;
