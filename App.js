import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      {/* <View
        style={{
          backgroundColor: "red",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View> */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your task"
          style={styles.input}
        ></TextInput>
        <Button title="push me"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flexDirection: "row",
    // width: "80%",
    // height: 300,
    // justifyContent: "center",
    // alignItems: "stretch",
    // backgroundColor: "#999",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "#777",
    width: "50%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
  },
});
