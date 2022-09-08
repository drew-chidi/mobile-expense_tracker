import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "el",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-01-05"),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-01-05"),
  },
  {
    id: "e3",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-01-05"),
  },
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-01-05"),
  },
  {
    id: "e5",
    description: "glasses",
    amount: 59.99,
    date: new Date("2022-08-30"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: ({ description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(expenseData, id) {
    dispatch({ type: "UPDATE", payload: { data: expenseData, id: id } });
  }
  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
