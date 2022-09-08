import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesSummary = ({ expenses, period }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  // let expensesSum = 0;
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  period: {
    color: "gray",
  },
  sum: {
    fontSize: 32,
    fontWeight: "700",
  },
});
