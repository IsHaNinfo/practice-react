import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"; //move update
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //u can't use custom compont as wrap
  //function clickHandler(){}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    //if data change u need sta te
    setTitle("updated!");
    console.log(title);
  }; //changes
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
