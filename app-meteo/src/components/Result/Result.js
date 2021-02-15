import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import classes from "./Result.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Result = ({ props }) => {
  let history = useHistory();
  let query = useQuery();
  const temp = parseFloat(query.get("t"))
  const text = temp >= 15 ? "Il fait chaud 😎" : "Il fait froid 🥶";
  const bg = temp >= 15 ? "tomato" : "dodgerBlue";

  function handleClick() {
    history.push("/");
  }

  return (
    <div className={classes.blockResult} style={{backgroundColor : bg}}>
      <h2 className={classes.result}>{text}</h2>
      <button type="button" onClick={handleClick} className={classes.Button} >
        Choisir une autre ville
      </button>
    </div>
  );
};
export default Result;
