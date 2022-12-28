import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    //Saving selectedYear in state
    //Initializing state with first year option
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter( expenseItems => {
        return expenseItems.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter defaultSelectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart items={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;