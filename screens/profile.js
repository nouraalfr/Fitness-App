import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';




const profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');

  // Load the persisted data from AsyncStorage on component mount
  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const persistedData = await AsyncStorage.getItem('profile');

        if (persistedData) {
          const { name, age, height, weight, gender } = JSON.parse(persistedData);
          setName(name);
          setAge(age);
          setHeight(height);
          setWeight(weight);
          setGender(gender);
        }
      } catch (error) {
        console.log('Error loading persisted data:', error);
      }
    };

    loadPersistedData();
  }, []);

  // Save the data to AsyncStorage whenever it changes
  useEffect(() => {
    const saveData = async () => {
      try {
        const dataToPersist = {
          name,
          age,
          height,
          weight,
          gender,
        };
        await AsyncStorage.setItem('profile', JSON.stringify(dataToPersist));
      } catch (error) {
        console.log('Error saving data:', error);
      }
    };

    saveData();
  }, [name, age, height, weight, gender]);

  // Calculate calories, protein, fat, and carbohydrates
  useEffect(() => {
    const calculatedCalories = Math.round(10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161));
    const calculatedProtein = Math.round(weight * 0.8);
    const calculatedFat = Math.round(weight * 0.4);
    const calculatedCarbohydrates = Math.round((calculatedCalories - (calculatedProtein * 4 + calculatedFat * 9)) / 4);

    setCalories(calculatedCalories);
    setProtein(calculatedProtein);
    setFat(calculatedFat);
    setCarbohydrates(calculatedCarbohydrates);
  }, [age, height, weight, gender]);




  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <Icon name="user" size={100} color="#dedadd" style={styles.icon} />
      </View>

      <View style={styles.first_box}>
        <Text style={styles.text_name}>Your Name:  </Text>
        <View style={styles.entrys}>
          <TextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            style={[styles.input]}
          />
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.text_other}>Your Age:      </Text>
        <View style={styles.entrys}>
          <TextInput
            placeholder="Enter Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={[styles.input]}
          />
        </View>
      </View>

      <View style={styles.box2}>
        <Text style={styles.text_other}>Your Height: </Text>
        <View style={styles.entrys}>
          <TextInput
            placeholder="Enter Height"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
            style={[styles.input]}
          />
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.text_other}>Your Weight:</Text>
        <View style={styles.entrys}>
          <TextInput
            placeholder="Enter Weight"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            style={[styles.input]}
          />
        </View>
      </View>

      <View style={styles.box2}>
        <Text style={styles.text_other}>Gender:          </Text>
        <View style={styles.entrys}>
          <RNPickerSelect
            placeholder={{
              label: "Select Gender",
              value: null,
            }}
            value={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            style={{
              inputIOS: {
                color: 'black',
                fontSize: 19,
                marginTop: 12,
                textAlign: 'center',
                fontWeight: '400',
              },
              inputAndroid: {
                color: 'black',
                fontSize: 19,
                marginTop: 12,
                textAlign: 'center',
                fontWeight: '400',
              },
              placeholder: {
                color: '#a9a9a9',
                fontSize: 19,
                marginTop: 12,
                textAlign: 'center',
                fontWeight: '400',
              },
            }}
          />
        </View>

      </View>


      <View style={styles.resultContainer}>

        <View style={styles.resultBox}>
          <Text
            style={styles.resultLabel}>Cal
            <Icon name="fire" size={20} color="#dedadd" style={styles.small_icon} />
          </Text>
          <View style={styles.smallBox}>
            <Text style={styles.smallBoxText}>{calories}</Text>
          </View>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Protein
          </Text>
          <View style={styles.smallBox}>
            <Text style={styles.smallBoxText}>{protein}g</Text>
          </View>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Fat</Text>
          <View style={styles.smallBox}>
            <Text style={styles.smallBoxText}>{fat}g</Text>
          </View>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Carbs</Text>
          <View style={styles.smallBox}>
            <Text style={styles.smallBoxText}>{carbohydrates}g</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

export default profile;






const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  icon: {
    justifyContent: 'center',
    marginTop: 10,
  },

  // small_icon: {

  // },

  first_box: {
    marginBottom: 10,
    marginTop: 20,
    alignItems: 'center',
    // backgroundColor: '#e6cce0',
    backgroundColor: '#e6ccdf',
    // backgroundColor: '#edd5ec',
    // backgroundColor: '#ffcec8',
    flexDirection: 'row',
    height: 75,
    width: 400,
    borderRadius: 15,


  },

  box: {
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#c2dedc',
    flexDirection: 'row',
    height: 75,
    width: 400,
    borderRadius: 15,

  },

  box2: {
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#e6ccdf',
    flexDirection: 'row',
    height: 75,
    width: 400,
    borderRadius: 15,

  },


  entrys: {
    backgroundColor: '#f4f4f4',
    height: 50,
    width: 120,
    borderRadius: 20,
    marginLeft: 150,
  },

  text_name: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 30,
    paddingLeft: 15,
    marginBottom: 20,
    color: '#4b4b4b',

  },


  text_other: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 0,
    paddingLeft: 15,
    color: '#4b4b4b',

  },

  gender: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 0,
    paddingLeft: 15,

  },

  input: {
    color: 'black',
    fontSize: 19,
    marginTop: 12,
    textAlign: 'center',
    fontWeight: '400',

  },

  image: {
    marginTop: 15,
    width: 300,
    height: 300,
  },

  calculate_button: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    marginTop: 20,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },


  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },


  resultBox: {
    alignItems: 'center',
    padding: 10,
  },

  resultLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  smallBox: {
    backgroundColor: '#dedadd',
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  smallBoxText: {
    fontSize: 16,
    fontWeight: '400',
  },


});


