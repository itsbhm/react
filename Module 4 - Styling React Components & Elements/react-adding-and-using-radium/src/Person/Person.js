import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        Im a {props.name} and I am {props.age} year old!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
      {/* <input type="text" onChange={props.changed} value={props.name} /> */}
    </div>
  );
};

export default Radium(person);
