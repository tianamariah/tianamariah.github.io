import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    //Saving selectedYear in state
    //Initializing state with first year option
    const [filteredYear, setFilteredYear] = useState('2025');

    const filterSelectedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onYearSelected={filterSelectedHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card> 
        </div>                                                                                                        
    );
}


export default Expenses;