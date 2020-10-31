import React from 'react';
import {Text, StyleSheet} from 'react-native';

/**
 * Component TextComponent
 * Params:
 * text: String
 * */
const TextComponent = ({text}) => {
    return <Text style={[styles.container]}>{text}</Text>;
}

const styles = StyleSheet.create({
    container: {
        color: '#212121',
        fontSize: 16
    }
});

export default TextComponent;
