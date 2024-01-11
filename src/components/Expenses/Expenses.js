import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../Filters/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  let year = "";
  const [filteredYear, setFilteredYear] = useState("2020");
  console.log("filteredYear", filteredYear);

  const yearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearSelection={yearSelectionHandler}
        />
       
        {console.log("props on expenses page", props)}
        {
          props.expenses.filter((expense) =>
            expense.date.getFullYear().toString() === filteredYear)
            .map((expense) => {
              return (
                <ExpensesItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                ></ExpensesItem>
              );
            })
        }
      </Card>
    </div>
  );
};

export default Expenses;
