import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Booking = ({navigation}) => {
  const [formData, setFormData] = useState({
    username: '',
    adult: '',
    children: '',
    email: '',
    phone: '',
  });
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  //   const [time, setTime] = useState('');

  const showPicker = () => {
    setIsPickerShow(true);
  };

  // const onChange = (event, value) => {
  //   setDate(value);
  //   if (Platform.OS === 'android') {
  //     setIsPickerShow(false);
  //   }
  // };
  const handleChange = (key, val) => {
    // setFormData({...formData, [key]: val});
  };

  // let formData2 = [];

  // //button click funtion
  // function handleClick() {
  //   formData2 = [...formData2, {username, adult, children, phone,date}];
  //   console.log('formdata', formData2);
  // }
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'yellow',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginTop: 50,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
        }}>
        Confirm your booking
      </Text>
      <TextInput
        style={styles.input}
        placeholder="enter your name"
        // autoCapitalize="none"
        placeholderTextColor="yellow"
        onChangeText={val => handleChange('name', val)}
        // value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="adult"
        autoCapitalize="none"
        placeholderTextColor="yellow"
        onChangeText={val => handleChange('adult', val)}
        // value={adult}
      />
      <TextInput
        style={styles.input}
        placeholder="children"
        autoCapitalize="none"
        placeholderTextColor="yellow"
        onChangeText={val => handleChange('children', val)}
        // value={children}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        placeholderTextColor="yellow"
        onChangeText={val => handleChange('email', val)}
        // value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="phone no"
        autoCapitalize="none"
        placeholderTextColor="yellow"
        onChangeText={val => handleChange('phone', val)}
        // value={phone}
      />
      {/* date time picker */}
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button
            title="Show Picker"
            color="purple"
            // style={{borderRadius: 10}}
            onPress={showPicker}
          />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}

      <TouchableOpacity >
      {/* onPress={() => handleClick()} */}
        <Text
          style={{
            color: 'yellow',
            textAlign: 'center',
            // marginTop: 200,
            fontWeight: 'bold',
            fontSize: 20,
            fontStyle: 'italic',
            borderWidth: 1,
            height: 40,
            width: 100,
            padding: 5,
            borderColor: 'yellow',
            borderRadius: 10,
            marginLeft: 150,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  input: {
    // backgroundColor: 'white',
    width: 300,
    height: 52,
    marginTop: 30,
    borderWidth: 1,
    fontStyle: 'italic',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'yellow',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50,
    color: 'yellow',
  },
  pickedDateContainer: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    width: 170,
    marginTop: 20,
    marginLeft: 120,
    borderWidth: 2,
    borderColor: 'purple',
    height: 70,
    width: 170,
    elevation: 50,
    shadowColor: 'yellow',
  },
  pickedDate: {
    fontSize: 18,
    color: 'yellow',
  },
  btnContainer: {
    padding: 40,
    // borderRadius:50
    // width:120,
    // marginLeft:150,
    // height:60,
    // marginTop:20
  },
  //   btnContainer:{
  //     width:120,
  //     height:60
  //   }
  // This only works on iOS
  //   datePicker: {
  //     width: 320,
  //     height: 260,
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'flex-start',
  //   },
});
