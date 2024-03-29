import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeTabNavigator from "./TabNavigator";
import Dashboard from '../screens/Dashboard'
//import ProfileScreen from "../screens/ProfileScreen";
//import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
         <Stack.Screen
              name="DashboardScreen"
              component={HomeTabNavigator}
              options={{
                headerShown: false,
              }}
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
