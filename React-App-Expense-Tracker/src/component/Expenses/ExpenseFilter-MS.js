import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectYearHandler = (event) => {
    //console.log(event.target.value);
    props.onYearSelected(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectYearHandler}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2012'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;