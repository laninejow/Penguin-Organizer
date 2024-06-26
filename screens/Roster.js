// screens/Roster.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const roster = [
  {
    id: '1',
    name: 'Noel Acciari',
    photo: require('../assets/noel_acciari.png'), // Add player photo in assets
    number: 55,
    position: 'C',
    shoot: 'R',
    height: `5'10"`,
    weight: 209,
    born: 'Dec 1, 1991',
    birthplace: 'Johnston, Rhode Island, USA',
  },
  {
    id: '2',
    name: 'Emil Bemstrom',
    photo: require('../assets/emil_bemstrom.png'), // Add player photo in assets
    number: 52,
    position: 'C',
    shoot: 'R',
    height: `6'0"`,
    weight: 195,
    born: 'Jun 1, 1999',
    birthplace: 'Nykoping, SWE',
  },
  {
    id: '3',
    name: 'Michael Bunting',
    photo: require('../assets/michael_bunting.png'), // Add player photo in assets
    number: 8,
    position: 'LW',
    shoot: 'L',
    height: `6'0"`,
    weight: 192,
    born: 'Sep 17, 1995',
    birthplace: 'Scarborough, Ontario, CAN',
  },
  {
    id: '4',
    name: 'Jeff Carter',
    photo: require('../assets/jeff_carter.png'), // Add player photo in assets
    number: 77,
    position: 'C',
    shoot: 'R',
    height: `6'3"`,
    weight: 200,
    born: 'Aug 7, 1987',
    birthplace: 'London, Ontario, CAN',
  },
  {
    id: '5',
    name: 'Sidney Crosby',
    photo: require('../assets/sidney_crosby.png'), // Add player photo in assets
    number: 8,
    position: 'LW',
    shoot: 'L',
    height: `6'0"`,
    weight: 192,
    born: 'Sep 17, 1995',
    birthplace: 'Scarborough, Ontario, CAN',
  },
  // Add more players as needed
];

export default function Roster() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Roster</Text>
      <FlatList
        data={roster}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.photo} style={styles.photo} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <TouchableOpacity onPress={() => setOpen(open === item.id ? null : item.id)}>
                <Text style={styles.dropdown}>More Info</Text>
              </TouchableOpacity>
              {open === item.id && (
                <View style={styles.dropdownContent}>
                  <Text>Number: {item.number}</Text>
                  <Text>Position: {item.position}</Text>
                  <Text>Shoots: {item.shoot}</Text>
                  <Text>Height: {item.height}</Text>
                  <Text>Weight: {item.weight}</Text>
                  <Text>Born: {item.born}</Text>
                  <Text>Birthplace: {item.birthplace}</Text>
                </View>
              )}
            </View>
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
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    color: 'blue',
    marginTop: 5,
  },
  dropdownContent: {
    marginTop: 10,
  },
});
