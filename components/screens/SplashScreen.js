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
  ImageBackground
} from "react-native";

export default function HomeScreen({ navigation }) {

const image = { uri: "../assets/unsplash_BCUUAsPECK4.png" };

    return (
    <View style={styles.container}>
     <ImageBackground source={require('../assets/unsplash_BCUUAsPECK4.png')} style={styles.image}>
      <ScrollView
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}

        style={styles.center}
      >
         
        
   <Image style={styles.logo} source={require('../assets/Screenshot2023-03-200514581.png')} />
       
        
      </ScrollView>
       </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
    image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo:{

  },
  center:{
      justifyContent:'center'
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 10,
  },
  searchInputContainer: {
    backgroundColor: "#F0F8FF",
    marginLeft: 10,
    marginRight: 10,
  },
  headerQuickAcess: {
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeaderQuickAccess: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
