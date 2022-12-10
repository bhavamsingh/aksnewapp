import React from 'react';
import 'react-native-gesture-handler';
import { Button, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Alert ,Dimensions,Image,HeaderBackButton} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../../src/screens/Profile';
import Navigator from '../../src/screens/Navigator';
// import FontAwesome, {
//   SolidIcons,
//   RegularIcons,
//   BrandIcons,
//   parseIconFromClassName,
// } from 'react-native-fontawesome';


// const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
//const validIcon = parseIconFromClassName('fa fa-spinner fa-spin')

const About = ({  }) => {



//   const handelsubmit=()=>{

//     console.log('Hello')
//    alert('hello')

// navigation.navigate('Profile')
//     }





  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigator"  headers>
      {/* <Stack.Navigator initialRouteName="Upload" headers> */}


      <Stack.Screen
          name="Leave Application"  
          headerShown={true}
          component={Navigator}
        options={({ navigation }) => ({
           headerTintColor: '#ffffff',
          // title:"Leave Application",
          headerTitle: () => (
              
            <View  style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
        <Text style={{ fontWeight: 'bold',fontSize:20,color:"#fff",marginLeft:70}}>Leave Application</Text> 
            </View>),
          headerStyle: {
            // backgroundColor: '#373e5a', //Set Header color
            backgroundColor:"royalblue"
            // backgroundColor:"#fff"
          },
          headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',//Set Header text style
            },
          headerRight: () => (
            
            <TouchableOpacity
            

               onPress={() => navigation.navigate('Profile')}  >  
              
               {/* <FontAwesome style={{fontSize:24,color:"white"}} icon={validIcon}/> */}
               <Image style={{ width: 20, height: 20,marginLeft:50,color:"white" }} 
          source={require("../../assets/images/img12.png")} />          
            </TouchableOpacity>
          ),
        
          })}
          
        />













{/* 


      <Stack.Screen
          name="Leave Application"
          component={Navigator}
          
          options={{
           

             //Set Header Title
        
            headerTitle: () => (
              
              <View  style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
          <Text style={{ fontWeight: 'bold',fontSize:20,color:"#fff",marginLeft:70}}>Leave Application</Text>
          
              <TouchableOpacity onPress={()=> handelsubmit()}>
           <Image style={{ width: 50, height: 50,marginLeft:50 }} 
          source={require("../../assets/images/img4.png")} 
          
              />
              </TouchableOpacity>
              
              </View>
            
               


              // <Image style={{ width: 50, height: 50 }} source={require("../../assets/images/img4.png")} 
              
        
              // />
          
            ),

            // headerMode: 'none',
            
            headerStyle: {
              backgroundColor: '#373e5a', //Set Header color
              // backgroundColor:"green"
              // backgroundColor:"'#fff'"
            },

            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',//Set Header text style
            },
            headerTitleStyle: {
              //  alignItems: 'center' ,
               headerTitleAlign: 'center'
            
            },
            
           
           }} 
       
        /> */}
        <Stack.Screen name='Profile' component={Profile} 
        options={({ navigation }) => ({
          // title:"Leave Application",
          headerTintColor: 'white',
          headerTitle: () => (
              
            <View  style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
        <Text style={{ fontWeight: 'bold',fontSize:20,color:"#fff",marginLeft:40}}>Leave Application</Text> 
            </View>), headerStyle: {
            // backgroundColor: '#373e5a', //Set Header color
            backgroundColor:"royalblue"
            // backgroundColor:"'#fff'"
          },
        
          })}/>
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
export default About;


