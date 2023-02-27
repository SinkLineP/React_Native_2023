import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [name, setName] = useState("testName");
  const [age, setAge] = useState(0);


  const showTextWithVariables = (variable, style) => {
    return <Text style={style}>{variable}</Text>
  }

  return (
    <View style={styles.container}>
      <Text>Enter your name: </Text>
      <TextInput
        style={styles.input}
        placeholder={"Enter your name.."}
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter your age: </Text>
      <TextInput
        keyboardType={"numeric"}
        style={styles.input}
        placeholder={"Enter your age.."}
        onChangeText={(value) => setAge(Number(value))}
      />
      <Text>
        ============================================{"\n"}
        My name: {showTextWithVariables(name, styles.text)}.{"\n"}
        I`m: {showTextWithVariables(age === 0 ? "test age" : age, styles.text)}.{"\n"}
        ============================================
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red",
    fontWeight: "bold"
  },
  input: {
    borderColor: "#1e9dff",
    borderWidth: 1,
    padding: 8,
    // margin: 10,
    width: 200,
    borderRadius: 4
  }
});
