// import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../Filters/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  console.log("filteredYear", filteredYear); 

  const yearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearSelection={yearSelectionHandler}
        />

        {console.log("props on expenses page", props)}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
