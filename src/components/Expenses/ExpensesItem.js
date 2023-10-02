import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from './ExpenseAmount';
import Card from "../UI/Card";

const ExpensesItem = (props) => {

  const[title, setTitle] = useState(props.title);
  console.log('ExpensesItem evaluated by React');
  

  const clickHandler = () =>{
    setTitle('Updated!');
    console.log('I was clicked', title)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <ExpenseAmount amount={props.amount}/>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpensesItem;
