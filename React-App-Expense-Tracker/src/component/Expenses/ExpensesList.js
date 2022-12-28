import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {


    if (props.items.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>There are no expenses for this year</h2>
        );
    }


    return (
        <ul className='expenses-list'>
           {props.items.map((expenseItem) => (
            <ExpenseItem
                key={expenseItem.id}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date}
            />
            ))}
        </ul>
    );

}


export default ExpensesList;