import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../Filters/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {

  let year = '';
  const [filteredYear, setFilteredYear] = useState('2020');
  console.log('filteredYear',filteredYear);

  // const[filteredInfoText, setFilteredInfoText] = useState('2019, 2021 & 2022');
  let filteredInfoText = '2019, 2021 & 2022';
  if(filteredYear === '2019'){
    filteredInfoText = '2020, 2021, 2022 & 2023';
  }else if(filteredYear === '2020'){
    filteredInfoText = '2019, 2021, 2022 & 2023';
  }else if(filteredYear === '2021'){
    filteredInfoText = '2019, 2020, 2022 & 2023';
  }else if(filteredYear === '2022'){
    filteredInfoText = '2019, 2020, 2021 & 2023';
  }else if(filteredYear === '2023'){
    filteredInfoText = '2019, 2020, 2021 & 2022';
  }

  const yearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearSelection = {yearSelectionHandler}/>
      <p className="expenses-filter">Data for year {filteredInfoText} is hidden</p>
        <ExpensesItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpensesItem>
        <ExpensesItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpensesItem>
        <ExpensesItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpensesItem>
        <ExpensesItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpensesItem>
      </Card>
    </div>
  );
};

export default Expenses;
