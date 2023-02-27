import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Миша", id: 1},
    {name: "Карина", id: 2},
    {name: "Артем", id: 3},
    {name: "Мама", id: 4},
    {name: "Папа", id: 5},
    {name: "Бабушка", id: 6},
    {name: "Дедушка", id: 7},
    {name: "Кот", id: 8},
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return people.filter(person => person.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Text>Выбери, кого хотел бы уволить)</Text>
      {people.length === 0 ? (<Text>Не кого увольнять</Text>) : ""}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  },
  ContainerAddUser: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10
  }
});

