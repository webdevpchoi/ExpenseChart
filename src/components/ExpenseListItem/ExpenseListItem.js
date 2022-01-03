import * as S from "./styled";

const ExpenseListItem = ({ expense, removeExpense }) => {
  return (
    <S.ListItem>
      <div>{expense.title}</div>
      <div>{expense.price}</div>
      <div>{expense.date}</div>
      <button onClick={() => removeExpense(expense.id)}>Remove Expense</button>
    </S.ListItem>
  );
};

export default ExpenseListItem;
