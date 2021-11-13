import React, { Component } from 'react';
//import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu', android:
//         'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });
//import Icon from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = (props) => {
return(
<MaterialCommunityIcons name="account"  />
)
//  const IconApp = (props) => {
    
//         const phone_icon = (
//             <Icon name="phone" size={50} color="#86fc72" onPress={() => { Alert.alert("Want to make Call?") }} />
//         );
//         const chrome_icon = (
//             <Icon name="chrome" size={50} color="#ffff5e" onPress={() => { Alert.alert("Want to open browser?") }} />
//         );
//         const music_icon = (
//             <Icon name="music" size={50} color="#fa69cc" onPress={() => { Alert.alert("Want to play music?") }} />
//         );
//         return (
//             <View style={styles.MainContainer}>
//                 <TouchableOpacity>
//                     {phone_icon}
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ marginTop: 9 }}>
//                     {chrome_icon}
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ marginTop: 9 }}>
//                     {music_icon}
//                 </TouchableOpacity>
//             </View>
//         );
//     }

// const styles = StyleSheet.create({
//     MainContainer: {
//         flex: 1,
//         justifyContent: 'center', alignItems: 'center', backgroundColor: '#baa4b3', padding: 25
//     }
// });
}
export default myIcon;