import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// Versi 1
  // const HomeScreen = props => {
  //   console.log(props);
  //   return (
  //   <View>
  //       <Text style={styles.text}>Youtube</Text>
  //       <Button 
  //         onPress={() => props.navigation.navigate('Components')}
  //         title="Go to Component Demo" 
  //       />
  //       <TouchableOpacity onPress={() => console.log('List Pressed')}>
  //         <Text>Go to List Demo</Text>
  //       </TouchableOpacity>
  //   </View>
  //   );
  // };

// Versi 2
const HomeScreen = ({navigation}) => {
  return (
  <View>
      <Text style={styles.text}>Youtube</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Component Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Lists')}
        title="Go to Lists Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo" 
      />

      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
