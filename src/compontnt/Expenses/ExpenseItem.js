import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"; //move update
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //u can't use custom compont as wrap
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
