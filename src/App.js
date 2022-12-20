import React from "react";
import NewExpense from "./compontnt/NewExpense/NewExpense";
import Expenses from "./compontnt/Expenses/Expenses";

function App() {
  //arrow function we can write( const App =() =>{})
  const expense = [
    // propes data
    {
      id: "e1",
      title: "Car insurance ",
      amount: 94.72,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: " toilet insurance",
      amount: 94.72,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "cab expenses",
      amount: 294.72,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e4",
      title: "lorrt expenses",
      amount: 294.72,
      date: new Date(2022, 7, 14),
    },
  ];
  //automatically use js.
  /* return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get Started"),
    React.createElement(Expenses, { items: expense })
  );*/
  return (
    <div>
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
