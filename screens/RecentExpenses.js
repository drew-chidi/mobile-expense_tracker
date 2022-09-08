import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses.context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <View>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod='Spent this week'
        fallBackText='No expenses registered for the last 7 days'
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
