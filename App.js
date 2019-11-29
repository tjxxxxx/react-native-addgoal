import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => {
      return [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ];
    });
    setIsAddModal(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalAddHandler = () => {
    setIsAddModal(false);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Button
          title="Add new Goal"
          onPress={() => setIsAddModal(true)}
        ></Button>
        <GoalInput
          visible={isAddModal}
          onCancel={cancelGoalAddHandler}
          onAddGoal={addGoalHandler}
        ></GoalInput>

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            ></GoalItem>
          )}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "red",
    borderWidth: 2,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
