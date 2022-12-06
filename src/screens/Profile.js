import React from 'react'
import {View,Text,FlatList} from 'react-native'



const Profile = ({navigation})=>{


    
    // console.log(route.params)
    return(



        <View style={{flex:1,justifyContent:"center",alignItems:"center",}}>
    <View>
    <Text>
        bhavam singh
    </Text>
</View>

             {/* <Text>profile</Text> */}
        {/* <View style={{backgroundColor:"green",width:400,height:500,justifyContent:"center",alignItems:"center"}}>
        <Text>Date:{route.params.userDate}</Text>
         <Text>Purpose:{route.params.userPurpose}</Text>
         <Text>Address:{route.params.userAddress}</Text>
         <Text>Contact:{route.params.userContact}</Text>
         <Text>Suggetion:{route.params.userSuggetion}</Text>
         <Text>drop:{route.params.userDropdown}</Text>
         <Text>Choose:{route.params.userChoose}</Text>
         </View> */}
 </View>

    )
}
export default Profile;