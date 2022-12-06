import React, { useState } from 'react';
// import type {Node} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,Dimensions, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
// import { useNavigation } from "@react-navigation/native"
import {Dropdown}  from 'react-native-element-dropdown';
import FilePicker, { types } from 'react-native-document-picker'

// import DropDownPicker from 'react-native-dropdown-picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import moment from 'moment';

const data= [{ label: 'Leave List', value: '1' },
  { label: 'Casual Leave - CL', value: '2' },
  { label: 'Medical Leave - ML', value: '3' },
  { label: 'Post Dated Leave - PDL', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },];


const Navigator = ({navigation})=>{
  // navigation.navigate('Navigater')
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);

  // const[category,setCotegory]=useState("")
  // const[subcotegory,setSubCotegory]=useState("")
  const [value, setValue] = useState(null);

  // const data= [{ label: 'EL', value: 'Electronics' },
  // { label: 'Item 2', value: '2' },
  // { label: 'Item 3', value: '3' },
  // { label: 'Item 4', value: '4' },
  // { label: 'Item 5', value: '5' },
  // { label: 'Item 6', value: '6' },
  // { label: 'Item 7', value: '7' },
  // { label: 'Item 8', value: '8' },];

  // const subcotegories=[

  // ]
  
    const [fileData,setFileData] = useState([])
    const[agree,setAgree]= useState(false);
    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // const [date, SetDate] = useState(new Date());

    const [datePicker, setDatePicker] = useState(false);
    const[base64dataDob,setbase64dataDob]= useState()
 
    const [date, setDate] = useState(new Date());
   
   
    const [timePicker, setTimePicker] = useState(false);
   
    const [time, setTime] = useState(new Date(Date.now()));
   
    function showDatePicker() {
      setDatePicker(true);
    };
   
   
    function onDateSelected(event, value) {
      setDate(value);
      setDatePicker(false);
    };
   

   


    function showDatePicker() {
      setDatePicker(true);
    };
   
   
    function onDateSelected(event, value) {
      setDate(value);
      setDatePicker(false);
    };
   
 const handleFilePicker= async()=>{
  try {
    const response = await FilePicker.pick({
      presentationStyle: "fullScreen",allowMultiSelection: true,
      type:[types.allFiles],
      // readContent: true,
    });
    const fetchResponse= await fetch(response[0].uri);
    const blob = await  fetchResponse.blob();
    console.log(blob);
    var reader= new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function(){
      var base64dataDob= reader.result.substr(reader.result.indexOf(',') + 1);
      setbase64dataDob(base64dataDob);
      console.log(base64dataDob)
    }
    setFileData(response)
    // console.log("response")
    setbase64dataDob(response[0].name)
    console.log((response[0].name))
  } catch(err){
    console.log(err);
  }

  let fPath = Platform.select({
    ios: fs.dirs.DocumentDir,
    android: fs.dirs.DownloadDir,
 });
 

 }
 

//  const[manth,setManth]=useState("")
 const[purpose,setPurpose]=useState("")
 const[address,setAddress]=useState("")
 const[contact,setContact]=useState("")
 const[suggetion,setSuggetion]=useState("")
 const[choose,setChoose]=useState("")
 const[drop,setDrop]=useState("")
 //alert(date)

 const handelsubmit=()=>{

     console.log('Hello')
    

     navigation.navigate('Profile',{

     

         userDate: "12/2/2022",
        //  userDate:manth,
         userPurpose:purpose,
         userAddress:address,
         userContact:contact,
         userSuggetion:suggetion,
         userChoose: choose,
         userDropdown: "Leave List"
         
     })
    
 }
       return(
<ScrollView>
 {/* <View style={styles.container}>
  <View style={{backgroundColor:"green",height:"20%",width:"100%",justifyContent:"center",alignItems:"center"}}>
    <Text>Leave Application</Text>
  </View>
</View>  */}
<View>

{/* <View style={{flex:1, marginTop:0}}>
  <View style={{backgroundColor:"darkolivegreen",height:40,width:"100%",justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"white",fontWeight:"bold",fontSize:20,paddingBottom:5}}>Leave Application</Text>
  </View>
</View> */}
{/* <View >
<Image  source={require('../../assets/images/img4.png') } style={{width:40,height:40}}/>
</View> */}

<View style={styles.MainContainer}>
   
   {/* <Text style={styles.text}>Date = {date.toDateString()}</Text> */}


   {datePicker && (
     <DateTimePicker
       value={date}
       mode={'date'}
       display={Platform.OS === 'ios' ? 'spinner' : 'default'}
       is24Hour={true}
       onChange={onDateSelected}
       style={styles.datePicker}
     />
   )}

   

   {/* {!datePicker && (
     <View style={{ margin: 10 }}>
       <Button title="Show Date Picker" color="green" onPress={showDatePicker} />
     </View>
   )} */}

  

 </View>
 {/* <View style={{marginLeft:20,display:"flex",flexDirection:"row"}}> */}
{/* <View style={{marginLeft:30,display:"flex",flexDirection:"row"}}>
    {
        agree ? (
            
            <View style={{display:"flex",flexDirection:"column"}}>
                <View style={{marginBottom:15}}>
            <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     />
     </View>
            <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     />
     </View>
        ):null    
    }
    </View> */}
    <View style={{display:"flex",flexDirection:"row",marginLeft:20,marginTop:10,position:"relative",top:20}}>
<CheckBox  
    value={agree }
    onValueChange={() => setAgree(!agree)}
    color={agree? "#4630EB" : undefined}
    />
  <Text style={{justifyContent:"center",alignItems:"center",marginTop:5,fontWeight:"bold"}}>In case Leaving Headquater</Text> 
</View>
{/* </View> */}
<View value={drop} 
        onChangeText={(text)=> setDrop(text)}>
<Dropdown         
// style={{ margin: 16,
//       height: 50,
//       borderColor: 'gray',
//       borderWidth:1
// }}
      
//       setSelected={setCotegory}
//       data={data}
//       placeholder={'Select Cotegory'}
//       defaultOption={{ label: 'EL', value: 'Electronics' }}
//       selectedTextStyle={styles.selectedTextStyle}


style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Leave List"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          // alert(value)
          // alert(value)
        }}
 
    />

</View>




















    <View style={{position:"relative",bottom:25}}>
     <View style={{display:"flex",flexDirection:"row",marginTop:20,justifyContent:"center"}}>





  <View style={{marginTop:5,marginRight:8}}>
     <Text style={{fontWeight:"bold",marginLeft:1}}>Date from:</Text>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
     {/* <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     /> */}
      <View >
        <TouchableOpacity 
        onPress={showDatePicker} title='Set Date' 
        style={{marginTop:3,justifyContent:"center",alignItems:"center"}} 
       >
          <Text style={{borderWidth:2, borderColor:"lightgrey",width: 150, textAlign:"center",textAlignVertical:"center",
        height:45,}} 
        value={date} 
        onChangeText={(text)=> setDate(text)}>{date.toDateString()} </Text>
        </TouchableOpacity>
        </View>

     
     {/* <TouchableOpacity onPress={showDatePicker} title='Set Date' style={{marginTop:3,justifyContent:"center",alignItems:"center"}}>
     <Image  source={require('../../assets/images/calender.jpg') } style={{width:20,height:30,position:'absolute',right:5}}/>
     </TouchableOpacity>  */}
       

     </View>
     </View>
     
     <View style={{marginTop:5}}>
     <Text style={{marginLeft:2,fontWeight:"bold"}}>To:</Text>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        {/* <View style={{paddingTop:20}}>
        <Image  source={require('../../assets/images/calender.jpg') } style={{width:20,height:50,alignItems:"center"}}/> */}
        {/* <TouchableOpacity onPress={showDatePicker} title='Set Date' style={{marginTop:3,justifyContent:"center",alignItems:"center"}}> */}
     
        {/* <TouchableOpacity onPress={showDatePicker} title='Set Date' style={{marginTop:3,justifyContent:"center",alignItems:"center"}}> */}

        
        {/* <TextInput onFocus={() => showDatePicker()} style={styles.input2} placeholder= {date.toDateString()}/>  */}
        <View>
        <TouchableOpacity onPress={showDatePicker} title='Set Date' style={{marginTop:3,justifyContent:"center",alignItems:"center"}} >
          <Text style={{borderWidth:2, borderColor:"lightgrey",width: 150, textAlign:"center",textAlignVertical:"center",
        height:45,}}
        
        
        
        >{date.toDateString()}</Text>
        </TouchableOpacity>
        </View>
        
   {/* </TouchableOpacity>  */}
      {/* </View> */}
      {/* <TouchableOpacity onPress={showDatePicker} title='Set Date' style={{marginTop:3,justifyContent:"center",alignItems:"center"}}>
     <Image  source={require('../../assets/images/calender.jpg') } style={{width:20,height:30,alignItems:"center",position:"relative",paddingLeft:20,position:'absolute',right:5}}/>
     </TouchableOpacity>  */}

     </View>

     </View>
     </View>
     <View style={{marginTop:10,}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Purpose:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input3} placeholder="Enter Your Purpose" value={purpose} onChangeText={(text)=> setPurpose(text)}/>
        </View>
     </View>
     <View style={{marginLeft:5,display:"flex",flexDirection:"row",marginTop:10,justifyContent:"center",alignItems:"center"}}>
    {
        agree ? (
            
            <View style={{display:"flex",flexDirection:"column"}}>
                  <Text style={{marginLeft:2,fontWeight:"bold"}}>Address:</Text>
                <View style={{marginBottom:10}}>
            <TextInput style={{width:315,height:45, borderWidth:2,marginLeft:2,padding:10, borderColor:"lightgrey"}} 
     placeholder="Enter Your Address" value={address} onChangeText={(text)=> setAddress(text)}
     
     />
     </View>
     <Text style={{marginLeft:2,fontWeight:"bold"}}>Contact No:</Text>
            <TextInput style={{width:315,height:45, borderWidth:2,marginLeft:2,padding:10, borderColor:"lightgrey"}} 
     placeholder="Enter Your Contact No." value={contact} onChangeText={(text)=> setContact(text)}
     
     />
     </View>
    
        ):null    
    }
    </View>
     {/* <View style={{marginTop:0}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Address:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Enter Your Name"/>
        </View>
     </View>
     <View style={{marginTop:10}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Contact No:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Enter Your Name"/>
        </View>
     </View> */}
     <View style={{marginTop:10}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Alternative Suggetion:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Enter Your Alternative Suggetion" value={suggetion} onChangeText={(text)=> setSuggetion(text)}/>
        </View>
     </View>
     <View style={{marginTop:10}}>
     <View >
        <Text style={{marginLeft:25,fontWeight:"bold",marginBottom:2}}>Attachment(if any):</Text>
        {/* <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Choose file"/>
        </View> */}
        {/* <TouchableOpacity onPress={() => handleFilePicker()} style={{paddingHorizontal:20,paddingVertical:15}}>
        
        <Text style={styles.input4}>Choose file</Text>
      </TouchableOpacity> */}
     </View>
     <View style={{justifyContent:"center",alignItems:"center"}}>
      {/* {fileData.length > 0 ? (
        <View>
          <Text>Name:{fileData.name}</Text>
        </View>
      ): null} */}
      {fileData.length > 0 ? fileData.map((ls,index)=> {
        return(
          <View style={{position:"relative",top:10,left:40}} key={index}>
            {/* <Image source={{uri: ls.uri}} style={{height:100,width:100}}/> */}
         <Text style={{position:"relative",top:15}}>{ls.name}</Text> 
          </View>
        )
      }): null}
      
      <TouchableOpacity onPress={() => handleFilePicker()} style={{paddingHorizontal:20,paddingVertical:15}}>
        <View style={{marginTop: -20}}>
        <Text style={styles.input4} value={choose} onChangeText={(text)=> setChoose(text)}>Choose file: </Text>
        </View>
      </TouchableOpacity>
     </View>
     </View>

     
     {/* <TouchableOpacity style={{backgroundColor:"lightblue",margin:12,padding:10,width:150,marginLeft:30}}>
        <Text style={{textAlign:"center"}}>Submit</Text>
       
      </TouchableOpacity> */}
      <View style={{display:"flex",flexDirection:"row",marginTop:10,justifyContent:"center",alignItems:"center"}}>
      <View style={{marginLeft:30,justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity style={{backgroundColor:"chocolate",margin:6,width:150,padding:10,borderRadius:8}}>
    <Text style={{color:"white",textAlign:"center"}}>Reset</Text>
</TouchableOpacity>
</View>
      <View style={{marginLeft:5,justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity style={{backgroundColor:"deepskyblue",margin:6,width:150,padding:10,borderRadius:8,marginRight:30}} 
>


    <Text style={{color:"white",textAlign:"center"}} onPress={()=> handelsubmit()}>Submit</Text>
</TouchableOpacity>
</View>
</View>
</View>
     

       
       
        
{/* {!datePicker && (

<View style={{ margin: 10,padding:10 }}>
 <Text style={styles.text}>{date.toDateString()}
<Button  title="pick Date" color="green"
 onPress={showDatePicker} 

/>
</Text>
</View>
)} */}

{datePicker && (
<DateTimePicker
value={date}
mode={'date'}
//display={Platform.OS === 'ios' ? 'spinner' : 'default'}
is24Hour={true}
onChange={onDateSelected}
style={styles.datePicker}
/>
)}
{/* <View style={{marginLeft:30,display:"flex",flexDirection:"row"}}>
<View style={{marginLeft:30,display:"flex",flexDirection:"row"}}>
    {
        agree ? (
            
            <View style={{display:"flex",flexDirection:"column"}}>
                <View style={{marginBottom:15}}>
            <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     />
     </View>
            <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     />
     </View>
        ):null    
    }
    </View>
    <View style={{marginLeft:10,display:"flex",flexDirection:"row"}}>
<CheckBox  
    value={agree }
    onValueChange={() => setAgree(!agree)}
    color={agree? "#4630EB" : undefined}
    />
  <Text style={{justifyContent:"center",alignItems:"center",marginTop:5,fontWeight:"bold"}}>I have read and agreed</Text> 
</View>
</View> */}

{/* <View style={{marginLeft:30}}>
<TouchableOpacity style={{backgroundColor:"blue",margin:12,width:100,padding:10,borderRadius:8}}>
    <Text style={{color:"white"}}>Login</Text>
</TouchableOpacity>
</View> */}
    </View>
    </ScrollView>
    
       )
}



    //  */}
    //    )
    //    }
    const {width}= Dimensions.get('screen')
    const styles = StyleSheet.create({
      // container:{
      //   flex: 1
      // },
      // selectedTextStyle:{
      //   fontSize: 16,
      //   color:"black"

      // },
        input1:{
        //   width: width -20,
        width: 150,
        height:45,
        borderWidth: 2,
        borderColor:"lightgrey",
    
        // marginTop: 10,
        // color:"lightgrey",
        marginLeft: 1,
        padding: 10,
        
        },
        input2:{
        //   width: width -20,
        width: 150,
        height:45,
        borderWidth: 2,
        borderColor:"lightgrey",
        marginLeft: 5,
        padding: 10,
        
        },
        input3:{
        //   width: width -20,
        width:315,
        height:45,
        borderWidth: 2,
        borderColor:"lightgrey",
        marginTop: 3,
        marginLeft:5,
        padding: 10,
        
        },
        input4:{
            //   width: width -20,
            width:315,
            height:45,
            borderWidth: 2,
            borderColor:"lightgrey",
            marginTop: 3,
            marginLeft:5,
            padding: 10,
            
            },
            datePicker: {
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 320,
                height: 260,
                display: 'flex',
              },
            container:{
                backgroundColor:"#fff",
                alignItems:"center",
                justifyContent:"center"
            },
        // // button:{
        // //   width: 200,
        // //   backgroundColor:"lightblue",
        // //   color:"white",
        // //   padding: 10,
        // //   marginTop:10,
        // //   borderRadius: 30
        // }

        dropdown: {
          margin: 16,
          height: 50,
          
          marginLeft:25,
          width:315,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
        },
        placeholderStyle: {
          fontSize: 16,
          fontWeight:"bold"
        },
        selectedTextStyle: {
          fontSize: 16,
          fontWeight:"bold"
        },
        inputSearchStyle: {
          height: 40,
          fontSize: 16,
        },
    
    })
    
    
export default Navigator;

