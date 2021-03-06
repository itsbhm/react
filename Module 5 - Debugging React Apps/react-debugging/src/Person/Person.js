import React from "react";
import classes from "./Person.css";

const person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Im a {props.name} and I am {props.age} year old!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
      {/* <input type="text" onChange={props.changed} value={props.name} /> */}
    </div>
  );
};

export default person;
