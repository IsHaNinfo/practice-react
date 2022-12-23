import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  //this event handler get all the input this time occcur
  //after all the time value set target occur.
  //form is submited we can use that value.
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit">Add expense</button>
    </form>
  );
};
export default ExpenseForm;
