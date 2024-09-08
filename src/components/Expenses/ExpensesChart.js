import Chart from '../Chart/Chart.js';

const ExpensesChart = (props) =>{
    return (
        <Chart dataPoints ={props.dataPoints} ></Chart>
    )
}

export default ExpensesChart;