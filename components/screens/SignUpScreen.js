import React from "react";
import { StyleSheet, View, Text,TextInput ,Image} from "react-native";



export default function SignUpScreen() {
 const [mobile,setMobile]=useState('');


  return (
      <View>
            <Image source={require('../../assets/logo.png')} />

            <View>
                   <View style={styles.fieldSet}>
                          <Text style={styles.legend}>Mobile</Text>
                          <TextInput
                                placeholder="Email"
                                style={styles.input}
                                value={mobile}
                                onChange={()=>{}}
                          />
                   </View>  
                   <View style={styles.fieldSet}>
                          <Text style={styles.legend}>Mobile</Text>
                          <TextInput
                                placeholder="Email"
                                style={styles.input}
                                value={mobile}
                                onChange={()=>{}}
                          />
                   </View>   
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
    fieldSet:{
        margin: 100,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#000'
    },
    legend:{
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    }
});

