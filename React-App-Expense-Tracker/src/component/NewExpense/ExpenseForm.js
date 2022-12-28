import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //Using Multiple States 
    //useState is initalized with an empty string because the target.value is always rendered as a string
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //Listen to Form Input and Handling Submitted Data 


    const submitHandler = (event) => {

        //Preventing the default onSubmit 
        event.preventDefault();

        //Pulling Inputted Data
        const enteredExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };


        //calling onSaveExpenseData Function that will execute on <ExpenseForm/>
        props.onSaveExpenseData(enteredExpenseData);

        //Resetting Form Inputs
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2023-01-01" max="2025-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;


/*
   
//Using One State
   //useState is initalized with an empty string because the target.value is always rendered as a string

   const [userInput, setUserInput] = useState({
       enteredTitle: '',
       enteredAmount: '',
       enteredDate: ''
   });

   //To prevent the loss of the other objects, add the spread operator before the specified value:
   //Whenever your state relies on the previous state use the following setUserInput(funtion)
   const titleChangeHandler = (event) => {
       setUserInput(
           (prevState) => {
               return {...prevState, enteredTitle: event.target.value};
           }
       )
   };

   const amountChangeHandler = (event) => {
       setUserInput(
           (prevState) => {
               return {...prevState, enteredAmount: event.target.value};
           }
       )
   };

   const dateChangeHandler = (event) => {
       setUserInput(
           (prevState) => {
               return {...prevState, enteredDate: event.target.value};
           }
       )
   };
   
   */