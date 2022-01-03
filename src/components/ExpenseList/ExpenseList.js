import * as S from "./styled";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <S.List>
      {expenses.map((expense) => (
        <ExpenseListItem
          key={expense.id}
          expense={expense}
          removeExpense={removeExpense}
        />
      ))}
    </S.List>
  );
};

export default ExpenseList;
