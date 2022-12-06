/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './src/screens/Navigator';
//import Home  from  './src/Screens/Home'
import About from './src/navigation/About';
const App =()=>{

  return (


  //  <Navigator/> 
  
  <About/>
  

  );
};

export default App;
