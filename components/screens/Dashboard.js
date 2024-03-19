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
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from "react-native-elements";
import Card from "../subcomponents/Card";

export default function DashboardScreen({ navigation }) {
     const departs = [
                      {
                        "department" : "GOPD",
                        "image" : require("../assets/gopd.jpg"),
                        "description" : "General OutPatient Department"
                       },
                      {
                        "department" : "Infertility",
                        "image" : require("../assets/infertility2.jpg"),
                        "description" : "Get your infertility problem resolved"
                      },
                      {
                        "department" : "Pedeatics",
                        "image" :  require("../assets/eye.jpg"),
                        "description" : "Giving birth to children"
                      },
                      {
                        "department" : "Oncology",
                        "image" : "",
                        "description" : "Solution to cancer problems"
                      },

                      
      ];
     const [search, setSearch] = useState("");
     const [department,setDepartment] =  useState(departs);
     const [activeCardIndex, setActiveCardIndex] = useState(0);

     const { width } = Dimensions.get("screen");
     const cardWidth = width/2.0 ;// 1.9;
    
    
    
      return (
               <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="bus-outline" size={24} color="black" />
                    <View style={""}>
                          <Text style={styles.textHeader}>Hello,{"Mac"}</Text>
                    </View>
                <View>
                 <Image style={styles.profilePicture} source={require("../assets/temi.JPG")} />
                </View>
                </View>
              
                <View style={styles.howCanWeHelpConatiner}>
                       <Text style={styles.howCanWeHelp}>{"How can we help you"}</Text>
                        <SearchBar
                                round
                                searchIcon={{ size: 26 }}
                                containerStyle={styles.searchContainer}
                                inputContainerStyle={styles.searchInputContainer}
                                placeholder="Type your doctor's name"
                                onChangeText={(text) => searchFilterFunction(text)}
                                onClear={(text) => searchFilterFunction("")}
                                value={search}
                         />
                </View>
                
             <ScrollView nestedScrollEnabled={false} showsVerticalScrollIndicator={false}>
                <View>
                      <FlatList
                        onMomentumScrollEnd={(e) => {
                          setActiveCardIndex(
                            Math.round(e.nativeEvent.contentOffset.x / cardWidth)
                          );
                        }}
                        vertical
                        showsHorizontalScrollIndicator={false}
                        data={department}
                        contentContainerStyle={{ paddingVertical: 0, padding: 20 ,width:"100%" }}
                        renderItem={({ item, index }) => (
                          <TouchableOpacity
                            disabled={activeCardIndex != index}
                            activeOpacity={1}
                            // onPress={() => navigation.navigate("Booking", item)}
                          >
                            <Card doctor={item} index={index} />
                          </TouchableOpacity>
                        )}
                      />
                 </View>

             </ScrollView>
                  
         </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    border:'1px solid #000000',
     marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader:{

  },
  profilePicture:{
    borderRadius : 45,
    width: 50,
    height:50
  },
  howCanWeHelpConatiner:{
     marginTop : 35,
  },
  howCanWeHelp:{
        marginLeft: 30,
       fontSize : 20
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
  });