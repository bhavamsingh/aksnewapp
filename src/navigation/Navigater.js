import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 

import Navigator from '../../src/screens/Navigator';

// const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


const Navigater = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigator" headers>
      {/* <Stack.Navigator initialRouteName="Upload" headers> */}

      <Stack.Screen
          name="Navigator"
          component={Navigator}
          options={{
            title: 'Navigator',  //Set Header Title
            // headerMode: 'none',
            headerStyle: {
              backgroundColor: '#373e5a', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        {/* <Stack.Screen name='Screen1' component={Screen1}/> */}
        {/* <Stack.Screen name='Screen2' component={Screen2}/> */}
        {/* <Stack.Screen name ="profile" component = {Profile}
        
        
        options={{
            title: 'Profile',  //Set Header Title
            //  headerMode: 'none',
            //  backgroundColor:"black"
            backgroundColor: '#373e5a',
         
          }}
        /> */}
        {/* <Stack.Screen name='Upload' component={Upload}/> */}
        {/* <Stack.Screen name ="Form"  component = {Form}/> */}
        






    
       
    


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigater;
