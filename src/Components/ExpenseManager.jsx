import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import AddExpense from './AddExpense';

const ExpenseManager = () => {
  const [thisYearExpense, setThisYearExpense] = useState(0);
  const [income, setIncome] = useState(0); // Assuming you have income state

  useEffect(() => {
    // Fetch thisYearExpense and income data (similar to what you have in Dashboard)
    const fetchData = async () => {
      // Replace the following with your actual API calls
      const expenseResponse = await fetch('https://server-yash.onrender.com/get-this-year-expense');
      const expenseData = await expenseResponse.json();
      setThisYearExpense(expenseData.totalExpense);

      const incomeResponse = await fetch('https://server-yash.onrender.com/get-income'); // Replace with your actual API endpoint
      const incomeData = await incomeResponse.json();
      setIncome(incomeData.totalIncome); // Adjust the property based on your actual response
    };

    fetchData();
  }, []);

  return (
    <>
      <Dashboard thisYearExpense={thisYearExpense} />
      <AddExpense thisYearExpense={thisYearExpense} income={income} />
    </>
  );
};

export default ExpenseManager;