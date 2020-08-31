import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Versi 1
    // const ImageDetail = props => {
    //     return (
    //         <View>
    //             <Image source={props.imageSource}/>
    //             <Text>{props.title}</Text>
    //             <Text>Image Score - {props.scoreOfImage}</Text>
    //         </View>
    //     );
    // };

// Versi 2
const ImageDetail = ({ imageSource, title, scoreOfImage }) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Score - {scoreOfImage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;