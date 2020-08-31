import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends = [
        {name: 'Friend1'},
        {name: 'Friend2'},
        {name: 'Friend3'},
        {name: 'Friend4'},
        {name: 'Friend5'},
        {name: 'Friend6'},
        {name: 'Friend7'},
        {name: 'Friend8'},
        {name: 'Friend9'}
    ]

    return (
        <FlatList
            // Prop 
                // horizontal
                // showsHorizontalScrollIndicator={false}
            // End Prop

            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                //item === {item: {name: 'Friend1'}, index:0}
                return <Text style={styles.textStyles}>{item.name}</Text>
            }} 
        />
    )

    return <Text>List Screen</Text>
}

const styles = StyleSheet.create({
    textStyles:{
        marginVertical: 50
    }
});

export default ListScreen;