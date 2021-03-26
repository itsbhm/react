import React from "react";
import styled from "styled-components";
// import classes from "./Person.css";

const StyledDiv = styled.div`
  width: 50%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <div>
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
