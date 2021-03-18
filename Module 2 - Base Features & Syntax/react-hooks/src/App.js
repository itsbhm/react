import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Mini', age: 18 },
      { name: 'Sweety', age: 22 },
      { name: 'Arshi', age: 20 }
    ]
  });

  const [otherState, setOtherState] = useState("Ohter State");

  console.log(personState, otherState);

  const switchNameHandler = () => {

    // console.log("Button Clicked");

    setPersonsState({
      persons: [
        { name: 'Somya', age: 17 },
        { name: 'Harsh', age: 24 },
        { name: 'Arshi', age: 19 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} click={switchNameHandler}> Type: User </Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );
}

export default app;