import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "mario1", id: 1},
    {name: "mario2", id: 2},
    {name: "mario3", id: 3},
    {name: "mario4", id: 4},
    {name: "mario5", id: 5},
    {name: "mario6", id: 6},
    {name: "mario7", id: 7},
    {name: "mario8", id: 8},
  ])

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
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
  }
});

