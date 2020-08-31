import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    // return <Text style={styles.textStyle}>This is the components screen</Text>;

    //versi 2
    const name = 'Rinaldi';
    // const greeting2 = <Text style={styles.subHeaderStyle}>Greeting2</Text>;
    return (
        <View>
            {/* {greeting2} */}
            <Text style={styles.textStyle}>This is the components 2</Text>
            <Text style={styles.subHeaderStyle}>My name is {name }</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 50
    },
    subHeaderStyle:{
        fontSize: 20
    }
    
});

export default ComponentsScreen;