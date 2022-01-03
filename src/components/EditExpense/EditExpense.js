import { useState } from "react";

const EditExpense = ({ expense, saveEditedExpense }) => {
  const [title, setTitle] = useState(expense.title);
  const [price, setPrice] = useState(expense.price);
  const [date, setDate] = useState(expense.date);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const editedExpense = {
      title,
      price,
      date,
    };
    saveEditedExpense(editedExpense, expense.id);
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
      <button>Save Edit</button>
    </form>
  );
};

export default EditExpense;
