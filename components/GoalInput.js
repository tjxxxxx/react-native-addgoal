import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
const GoalInput = props => {
  const [enterGoal, setEnterGoal] = useState("");
  const goalInputHandler = enterText => {
    setEnterGoal(enterText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="cancel"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
  button: {
    width: "40%"
  }
});
export default GoalInput;
