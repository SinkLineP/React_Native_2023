import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [name, setName] = useState("testName");
  const [age, setAge] = useState(0);


  const showTextWithVariables = (variable, style) => {
    return <Text style={style}>{variable}</Text>
  }


  return (
    <View style={styles.container}>
      <Text>My name: {showTextWithVariables(name, styles.text)}, i`m here <Text>{showTextWithVariables(age, styles.text)}</Text></Text>
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
    }
});
