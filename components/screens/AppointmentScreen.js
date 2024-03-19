import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";


export default function AppointmentScreen({ navigation }) {
   
      return (
               <View style={styles.container}>
                <View style={styles.header}>
                     <Text>{"AppointmentScreen"}</Text>
                </View>
              </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header:{
    color:"black"
  }
})