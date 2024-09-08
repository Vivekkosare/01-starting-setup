import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

 if (props.items.length === 0){
    return <h2 className="expenses-list__fallback">No expenses found</h2>
 }

  return <ul className="expenses-list">
    {props.items.map((expense) => {
      return (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount} 
          date={expense.date}
        ></ExpensesItem>
      );
    })}
  </ul>
};

export default ExpensesList;
