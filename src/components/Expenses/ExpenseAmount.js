import './ExpenseAmount.css';

const ExpenseAmount = (props)=> {
    return (
        <div className="expense-item__price">Price:{props.amount}</div>
    )
}

export default ExpenseAmount;