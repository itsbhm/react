import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Mini", age: 18 },
      { name: "Sweety", age: 22 },
      { name: "Arshi", age: 20 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log("Button Clicked");

    this.setState({
      persons: [
        { name: newName, age: 17 },
        { name: "Harsh", age: 24 },
        { name: "Arshi", age: 19 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Shubham", age: 24 },
        { name: event.target.value, age: 26 },
        { name: "Arshi", age: 19 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // Inline Styling
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Uvi!")}
            changed={this.nameChangedHandler}
          >
            Type: User
          </Person>

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          ></Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          ></Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
