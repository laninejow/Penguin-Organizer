// screens/Score.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const schedule = [
  { id: '1', date: 'Tue, Oct 10', opponent: 'vs Chicago', result: 'L 4-2', record: '0-1-0', goalie: 'Jarry', topPerformer: 'Jarry' },
  { id: '2', date: 'Fri, Oct 13', opponent: '@ Washington', result: 'W 4-0', record: '1-1-0', goalie: 'Jarry', topPerformer: 'Malkin' },
  { id: '3', date: 'Sat, Oct 14', opponent: 'vs Calgary', result: 'W 5-2', record: '2-1-0', goalie: 'Nedeljkovic', topPerformer: 'Guentzel' },
  // Add more games as needed
];

export default function Score() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2023-24 Game Schedule</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.opponent}>{item.opponent}</Text>
            <Text style={[styles.result, { color: item.result.startsWith('W') ? 'green' : 'red' }]}>{item.result}</Text>
            <Text style={styles.record}>{item.record}</Text>
            <Text style={styles.goalie}>Goalie: {item.goalie}</Text>
            <Text style={styles.topPerformer}>Top Performer: {item.topPerformer}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  opponent: {
    fontSize: 16,
  },
  result: {
    fontSize: 16,
  },
  record: {
    fontSize: 16,
  },
  goalie: {
    fontSize: 16,
  },
  topPerformer: {
    fontSize: 16,
  },
});
