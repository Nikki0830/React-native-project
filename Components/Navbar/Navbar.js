import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {  } from 'react-native-gesture-handler';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 35,
          color: 'white',
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: 13,
        }}>
        Temple Booking
      </Text>
      {/* <Icon
        name="gear"
        style={{
          color: 'white',
          fontSize: 27,
          marginLeft: 180,
          fontWeight: 'bold',
          marginTop: -30,
        }}
      />
      <Text style={{color: 'white', marginLeft: 170}}>Setting</Text> */}
      <TouchableOpacity style={{opacity: 0.9}}>
    {/* //   onPress={() => navigation.navigate("Search")}> */}
        <Icon
          name="search"
          style={{
            color: 'white',
            fontSize: 24,
            marginLeft: 250,
            fontWeight: 'bold',
            marginTop: -40,
          }}
        />
      </TouchableOpacity>
      <Text style={{color: 'white', marginLeft: 240, marginTop: -15}}>
        Search
      </Text>
      <Icon
        name="eye"
        style={{
          color: 'white',
          fontSize: 27,
          marginLeft: 320,
          fontWeight: 'bold',
          marginTop: -48,
        }}
      />
      <Text style={{color: 'white', marginLeft: 300}}>View booking</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    // borderWidth:,
    // marginBottom: 20,
    borderColor: 'black',
    height: 70,
    marginHorizontal: -14,
    // backgroundColor:"white"
  },
});
