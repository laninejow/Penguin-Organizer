// screens/Roster.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const roster = [
  {
    id: '1',
    name: 'Noel Acciari',
    photo: require('../assets/noel_acciari.png'), 
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
    photo: require('../assets/emil_bemstrom.png'), 
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
    photo: require('../assets/michael_bunting.png'), 
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
    photo: require('../assets/jeff_carter.png'), 
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
    photo: require('../assets/sidney_crosby.png'), 
    number: 87,
    position: 'C',
    shoot: 'L',
    height: `5'11"`,
    weight: 200,
    born: 'Aug 7, 1987',
    birthplace: 'Cole Harbour, Nova Scotia, CAN',
  },
  {
    id: '6',
    name: 'Lars Eller',
    photo: require('../assets/lars_eller.png'), 
    number: 20,
    position: 'C',
    shoot: 'L',
    height: `6'2"`,
    weight: 205,
    born: 'May 8, 1989',
    birthplace: 'Rodovre, DNK',
  },
  {
    id: '7',
    name: 'Jansen Harkins',
    photo: require('../assets/jansen_harkins.png'), 
    number: 43,
    position: 'C',
    shoot: 'L',
    height: `6'2"`,
    weight: 197,
    born: 'May 23, 1987',
    birthplace: 'Clevland, Ohio, USA',
  },
  {
    id: '8',
    name: 'Evgeni Malkin',
    photo: require('../assets/evgeni_malkin.png'), 
    number: 71,
    position: 'C',
    shoot: 'L',
    height: `6'3"`,
    weight: 195,
    born: 'Jul 31, 1986',
    birthplace: 'Magnitogorsk, RUS',
  },
  {
    id: '9',
    name: 'Matt Nieto',
    photo: require('../assets/matt_nieto.png'), 
    number: 83,
    position: 'LW',
    shoot: 'L',
    height: `5'11"`,
    weight: 187,
    born: 'Nov 5, 1992',
    birthplace: 'Long Beach, California, USA',
  },
  {
    id: '10',
    name: 'Drew O Conner',
    photo: require('../assets/drew_oconner.png'), 
    number: 10,
    position: 'LW',
    shoot: 'L',
    height: `6'3"`,
    weight: 200,
    born: 'Jun 9, 1988',
    birthplace: 'Chatham, New Jersey, USA',
  },
  {
    id: '11',
    name: 'Jesse Puljujarvi',
    photo: require('../assets/jesse_puljujarvi.png'), 
    number: 18,
    position: 'RW',
    shoot: 'R',
    height: `6'4"`,
    weight: 201,
    born: 'May 7, 1998',
    birthplace: 'Alvkarleby, SWE',
  },
  {
    id: '12',
    name: 'Richard Rakell',
    photo: require('../assets/richard_rakell.png'), 
    number: 67,
    position: 'RW',
    shoot: 'R',
    height: `6'1"`,
    weight: 195,
    born: 'May 5, 1993',
    birthplace: 'Sundbyberg, SWE',
  },
  {
    id: '13',
    name: 'Bryan Rust',
    photo: require('../assets/bryan_rust.png'), 
    number: 17,
    position: 'RW',
    shoot: 'R',
    height: `5'11"`,
    weight: 192,
    born: 'May 11, 1992',
    birthplace: 'Pontiac, Michigan, USA',
  },
  {
    id: '14',
    name: 'Reilly Smith',
    photo: require('../assets/reilly_smith.png'), 
    number: 19,
    position: 'RW',
    shoot: 'L',
    height: `6'1"`,
    weight: 185,
    born: 'Apr 1, 1991',
    birthplace: 'Mimico, Ontario, CAN',
  },
  {
    id: '15',
    name: 'Radim Zohorna',
    photo: require('../assets/radim_zohorna.png'), 
    number: 63,
    position: 'RW',
    shoot: 'L',
    height: `6'6"`,
    weight: 220,
    born: 'Apr 29, 1996',
    birthplace: 'Havlickuv, CZE',
  },
  {
    id: '16',
    name: 'Ryan Graves',
    photo: require('../assets/ryan_graves.png'), 
    number: 27,
    position: 'D',
    shoot: 'L',
    height: `6'5"`,
    weight: 220,
    born: 'May 21, 1995',
    birthplace: 'Yarmouth, Nova Scotia, CAN',
  },
  {
    id: '17',
    name: 'Pierre-Olivier Joseph',
    photo: require('../assets/pierre-olivier_joseph.png'), 
    number: 73,
    position: 'D',
    shoot: 'L',
    height: `6'2"`,
    weight: 185,
    born: 'Jul 1, 1999',
    birthplace: 'Laval, Quebec, CAN',
  },
  {
    id: '18',
    name: 'Erik Karlsson',
    photo: require('../assets/erik_karlsson.png'), 
    number: 65,
    position: 'D',
    shoot: 'R',
    height: `6'0"`,
    weight: 190,
    born: 'May 31, 1990',
    birthplace: 'Landsbro, SWE',
  },
  {
    id: '19',
    name: 'Kris Letang',
    photo: require('../assets/kris_letang.png'), 
    number: 58,
    position: 'D',
    shoot: 'R',
    height: `6'0"`,
    weight: 201,
    born: 'Aug 24, 1987',
    birthplace: 'Montreal, Quebec, CAN',
  },
  {
    id: '20',
    name: 'John Ludvig',
    photo: require('../assets/john_ludvig.png'), 
    number: 7,
    position: 'D',
    shoot: 'L',
    height: `6'1"`,
    weight: 213,
    born: 'Aug 2, 2000',
    birthplace: 'Librec, CZE',
  },
  {
    id: '21',
    name: 'Marcus Pettersson',
    photo: require('../assets/marcus_pettersson.png'), 
    number: 28,
    position: 'D',
    shoot: 'L',
    height: `6'3"`,
    weight: 177,
    born: 'May 8, 1996',
    birthplace: 'Skelleftea, SWE',
  },
  {
    id: '22',
    name: 'Tristan Jarry',
    photo: require('../assets/tristan_jarry.png'), 
    number: 35,
    position: 'G',
    shoot: 'L',
    height: `6'2"`,
    weight: 194,
    born: 'Apr 29, 1995',
    birthplace: 'Surrey, British Columbia, CAN',
  },
  {
    id: '23',
    name: 'Alex Nedeljkovic',
    photo: require('../assets/alex_nedeljkovic.png'), 
    number: 39,
    position: 'G',
    shoot: 'L',
    height: `6'0"`,
    weight: 208,
    born: 'Jan 7, 1996',
    birthplace: 'Parma, Ohio, USA',
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
