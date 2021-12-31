const ExpenseForm = () => {
  return (
    <form>
      <label>
        Title
        <input type="text" />
      </label>
      <label>
        Price
        <input type="text" />
      </label>
      <label>
        Date
        <input type="text" />
      </label>
      <button>Cancel</button>
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
