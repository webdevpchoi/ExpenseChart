import { useState } from "react";

const ExpenseForm = ({ saveExpense }) => {
  const [title, setTitle] = useState("Set Title Here");
  const [price, setPrice] = useState("$0.00");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title,
      price,
      date,
    };
    saveExpense(expense);
    setTitle("");
    setPrice("$0.00");
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Price
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </label>
      <label>
        Date
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button>Cancel</button>
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
