import ExpenseForm from "../ExpenseForm/ExpenseForm.js";
import ExpenseList from "../ExpenseList/ExpenseList.js";
import { useState } from "react";

const ExpenseChart = () => {
  const [expenses, setExpense] = useState([]);

  const saveExpense = (expense) => {
    const taggedExpense = { ...expense, id: Math.random().toString() };
    console.log(taggedExpense);
    setExpense((prevExpenses) => [...prevExpenses, taggedExpense]);
  };

  return (
    <div>
      <ExpenseForm saveExpense={saveExpense} />
      <ExpenseList />
    </div>
  );
};

export default ExpenseChart;
