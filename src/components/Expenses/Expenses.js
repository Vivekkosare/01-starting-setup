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
        {props.expenses.map((expense) => {
          return (
            <ExpensesItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date} 
            ></ExpensesItem>        
          );     
        })}
      </Card>
    </div>
  );
};

export default Expenses;
