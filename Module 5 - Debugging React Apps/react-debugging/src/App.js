import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Mini", age: 18 },
      { id: "2", name: "Sweety", age: 22 },
      { id: "3", name: "Arshi", age: 20 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red"; // Raising error 'style' not found
      btnClass.push(classes.Red);
    }

    // const classes = ["text-red", "bold"].join(" ");

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <p className={assignedClasses.join(" ")}>Development made easy!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonHandler}
        >
          Toggle Button
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
