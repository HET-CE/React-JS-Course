import React, { Component } from "react";
import Person from "./Person";

class NameList extends Component {
  render() {
    const persons = [
      {
        id: 1,
        name: "iii",
        age: "99",
        skill: "react",
      },
      {
        id: 2,
        name: "lll",
        age: "98",
        skill: "angular",
      },
      {
        id: 3,
        name: "kkk",
        age: "97",
        skill: "vue",
      },
      {
        id: 4,
        name: "yyy",
        age: "96",
        skill: "angular",
      },
    ];
    const personList = persons.map((person) => {
      return <Person key={person.id} person={person} />;
    });
    return <div>{personList}</div>;
  }
}

export default NameList;
