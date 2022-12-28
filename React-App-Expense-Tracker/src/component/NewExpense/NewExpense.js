import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //Calling custom function on <NewExpense /> component
        props.onAddExpense(expenseData);

        //Closing Form 
        setIsFormEditable(false);
    };

    const [isFormEditable, setIsFormEditable ] = useState(false);

    const btnFormHandler = () => {
        setIsFormEditable(true);
    }

    const cancelBtnHandler = () => {
        setIsFormEditable(false);
    }

    //If form is not editable show only the button 
    if (!isFormEditable) {
        return (
            <div className="new-expense">
            <button onClick={btnFormHandler}>Add New Expense</button>
            </div>
        );
    }

    //else show only the form
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelBtnHandler}/>
        </div>
    );
}

export default NewExpense;
