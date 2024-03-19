import React,{ useCallback, useEffect, useState }  from "react";
import { StyleSheet,View,Text,TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AnimatedSplash from './components/screens/AnimatedSplashScreen';
import * as SplashScreen from 'expo-splash-screen';
import StackNavigator from "./components/navigation/StackNavigator";


// Keep the splash screen visible  while we  fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    
           <AnimatedSplash image={require('./assets/logo.png')}>
              <NavigationContainer>
                <StackNavigator />
              </NavigationContainer>
           </AnimatedSplash>
    
  );

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
