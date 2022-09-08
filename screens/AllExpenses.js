import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses.context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expensesPeriod='All Expenses'
        expenses={expensesCtx.expenses}
        fallBackText='No expenses found'
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
