import * as S from "./styled";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";

const ExpenseList = ({ expenses, removeExpense, saveEditedExpense }) => {
  return (
    <S.List>
      {expenses.map((expense) => (
        <ExpenseListItem
          key={expense.id}
          expense={expense}
          removeExpense={removeExpense}
          saveEditedExpense={saveEditedExpense}
        />
      ))}
    </S.List>
  );
};

export default ExpenseList;
