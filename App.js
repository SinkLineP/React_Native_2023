import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {styles} from "./styles/styles.js";

export default function App() {
  const [name, setName] = useState("nikola");
  const [person, setPerson] = useState({name: "mario", age: 19})

  const clickHandler = () => {
    setName("artem");
    setPerson({name: "artem", age: 20});
  }

  const PlusAge = () => {
    let addedAge = person.age + 1;
    
    setPerson({
      name: person.name,
      age: addedAge,
    })
  }

  const MineAge = () => {
    if (person.age <= 1) {
      return
    }
    let addedAge = person.age - 1;
    
    setPerson({
      name: person.name,
      age: addedAge,
    })
  }

  return (
    <View style={styles.container}>
      <Text>My name is <Text style={styles.person_text}>{name}</Text></Text>
      <Text>My friends, name: <Text style={styles.person_text}>{person.name}</Text> and age: <Text style={styles.person_text}>{person.age}</Text>.</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={() => clickHandler() } />
        <Button title="+" onPress={() => PlusAge()} />
        <Button title="-" onPress={() => MineAge()} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


