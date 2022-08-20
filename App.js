import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacknavigator from './Components/Stacknavigator/Stacknavigator';
import DrawerNav from './Components/Drawernavigator/DrawerNav';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {/* <Stacknavigator /> */}
        <DrawerNav/>

      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
