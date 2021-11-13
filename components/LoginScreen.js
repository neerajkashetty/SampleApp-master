import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, state, Alert, TextInput } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, ImageBackground, KeyboardAvoidingView } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useState } from 'react/cjs/react.development';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TouchID from 'react-native-touch-id';
//import {touchIdAuth} from 'react-native-touch-id';



function LoginScreen(props) {

  const optionalConfigObject = {
    title: "Login with TouchId ", // Android
    color: "ffffff", // Android,
    fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
  }

  function touchIdAuth(){
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate("Use Your TouchId to Authenticate", optionalConfigObject)
            .then(success => {
              Alert.alert('Authenticated Successfully');
              props.navigation.navigate('Icons')
            })
            .catch(error => {
              Alert.alert('Authentication Failed', error.toString());
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });

 }


  //     const [TextInputValue, setTextInputValue]=useState('');
  //     const [state, setState]=useState('Yet to login');

  //     const storeValue =()=>{
  //       if(TextInputValue){
  //         AsyncStorage.setItem('any key', TextInputValue);
  //         setTextInputValue();
  //         console.log(TextInputValue);
  //         alert('User details Saved')
  //         props.navigation.navigate('Home')


  //       }
  //       else{
  //         alert('please fill the above details')
  //       }
  //     }

  //     const getvalue = ()=>{
  //       AsyncStorage.getItem('any key').then((value) =>{
  //          setvalue(value);
  //       })
  //     }

  return (
    <KeyboardAwareScrollView style={{ flex: 1}} behavior='padding' backgroundColor='white' >

      <View style={{ alignItems: 'flex-end', paddingRight: 40 }}>

        <TouchableOpacity  >
          
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue'}}>SignUp</Text>
        </TouchableOpacity>
      </View>


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Image
          style={{ width: '23%', height: '20%', alignItems: 'center', top: 150 }}
          source={require('../assets/logo_s.jpg')} />

        <Text style={{ fontSize: 26, fontWeight: 'bold', bottom: 50, paddingVertical: 120, top: 50, color: 'purple' }}>DXC Technology</Text>

        {/*<TextInput
           style={{backgroundColor:'lightblue' , fontSize:16,borderRadius:20, width: 290 ,bottom:40, borderColor:'black', borderWidth:2}}
           placeholder="Username"
           value={TextInputValue}
           onChangeText={(data)=> setTextInputValue(data)}
          />*/}

        <TextInput
          style={{ backgroundColor: 'white', borderRadius: 1, width: 290, bottom: 20, borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'grey', fontWeight: 'bold' }}
          placeholder="Mobile No"
          placeholderTextColor='black'
          //value={TextInputValue}
          //onChangeText={(data)=> setTextInputValue(data)}

          secureTextEntry />

        {/*<TextInput
           style={{backgroundColor:'lightblue' , borderRadius:20, width: 290, borderColor:'black', borderWidth:2,  }}
           placeholder="Mobile No"/>*/}

        <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, width: 100, borderRadius: 30, bottom: 20 }}
            onPress={() =>
              props.navigation.navigate('OtpLogin')
            }
          //onLongPress={()=> props.navigation.navigate('Trending')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, paddingLeft: 13 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={{ color: 'grey' }}> Forgot Password? </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingTop: 120 }}
        onPress = {touchIdAuth.bind(this)}
        >
          
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Login with Touch Id</Text>
        </TouchableOpacity>
      </View>





    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  
});

export default LoginScreen;