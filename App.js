/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };


const {width,height} = Dimensions.get('window')



const App: () => Node = () => {
  
  const isDarkMode = useColorScheme() === 'dark';


  const onButtonPress=()=> {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      checkFrequency: codePush.CheckFrequency.MANUAL,
      updateDialog: false,
    });
}

  

  const renderButton=()=>{
    return(
      <TouchableOpacity  onPress={()=>onButtonPress()}style={{width:width-25,backgroundColor:'green',height:45,alignItems:'center',justifyContent:'center',marginTop:25,borderRadius:10}}>
          <Text style={{color:'white'}}>Continue</Text>
       </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <Text>CodePush Demo</Text>
          {renderButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default codePush(codePushOptions)(App);