import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, View} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "mario1", key: 1},
    {name: "mario2", key: 2},
    {name: "mario3", key: 3},
    {name: "mario4", key: 4},
    {name: "mario5", key: 5},
  ])

  return (
    <View style={styles.container}>
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
  }
});
