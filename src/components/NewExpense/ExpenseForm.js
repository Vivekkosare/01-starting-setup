import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) => {

   const[enteredTitle, setEnteredTitle] = useState('');
   const[enteredAmount, setEnteredAmount] = useState('');
   const[enteredDate, setEnteredDate] = useState('');

// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });

    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }
    const inputChangeHandler = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value);}
        else if(identifier === 'amount'){
            setEnteredAmount(value);}
        else if(identifier === 'date'){
            setEnteredDate(value);}
        }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)}/> */}
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            {/* <input type="text" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)}/> */}
            <input type="text" min="0.01" step="0.01"
            value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                {/* <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)}/> */}
                <input type="date" min="2019-01-01" max="2022-12-31"
                value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>

    </form>);
};

export default ExpenseForm;