import { FlatList, StyleSheet, Text, View } from "react-native";

function renderExpense(item) {
  return <Text>{item.item.description}</Text>;
}
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpense}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
