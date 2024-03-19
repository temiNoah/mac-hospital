import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Ionicons from "react-native-vector-icons/Ionicons";
//import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';

 import AppointmentScreen from "../screens/AppointmentScreen";
// import BookingScreen from "../screens/BookingScreen";
// import DietScreen from "../screens/DietScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Dashboard from "../screens/Dashboard";
import NotificationScreen from "../screens/NotificationScreen"


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardStack"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Appointment") {
            iconName = "calendar-outline";
          } else if (route.name === "Notification") {
            iconName = "restaurant-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#216afc",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />

      <Tab.Screen name="Notification" component={NotificationScreen}
          options={{
          headerShown: true,
          headerTitle: "Notification",
          headerTitleAlign: "center",
        }}
       />

      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerTitle: "Customer's Appointment",
          headerTitleAlign: "center",
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitle: "Personal Infomation",
          headerTitleAlign: "center",
        }}
      />
      
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
