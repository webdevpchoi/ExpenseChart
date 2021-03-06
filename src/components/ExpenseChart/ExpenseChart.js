import ExpenseForm from "../ExpenseForm/ExpenseForm.js";
import ExpenseList from "../ExpenseList/ExpenseList.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ExpenseChart = () => {
  const [expenses, setExpense] = useState([]);

  const saveExpense = (expense) => {
    const taggedExpense = { ...expense, id: uuidv4() };
    setExpense((prevExpenses) => [...prevExpenses, taggedExpense]);
  };

  const removeExpense = (expenseId) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpense(filteredExpenses);
  };

  const saveEditedExpense = (updatedExpense, id) => {
    console.log("save edit");
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...updatedExpense, id: expense.id } : expense
    );
    setExpense(updatedExpenses);
  };

  return (
    <div>
      <ExpenseForm saveExpense={saveExpense} />
      <ExpenseList
        expenses={expenses}
        removeExpense={removeExpense}
        saveEditedExpense={saveEditedExpense}
      />
    </div>
  );
};

export default ExpenseChart;
