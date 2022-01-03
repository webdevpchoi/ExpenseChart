import * as S from "./styled";
import { useState } from "react";
import EditExpense from "../EditExpense/EditExpense.js";

const ExpenseListItem = ({ expense, removeExpense, saveEditedExpense }) => {
  const [isEditing, setEditingState] = useState(false);
  const editHandler = () => {
    setEditingState((prevState) => !prevState);
  };
  return (
    <S.ListItem>
      {isEditing ? (
        <EditExpense expense={expense} saveEditedExpense={saveEditedExpense} />
      ) : (
        <div>
          <div>{expense.title}</div>
          <div>{expense.price}</div>
          <div>{expense.date}</div>
        </div>
      )}
      <button onClick={editHandler}>Edit</button>
      {!isEditing && (
        <button onClick={() => removeExpense(expense.id)}>
          Remove Expense
        </button>
      )}
    </S.ListItem>
  );
};

export default ExpenseListItem;
