import React from 'react';
import {Text, StyleSheet} from 'react-native';

/**
 * Component Title
 * Params:
 * text: String
 * style: ReactNative StyleSheet
 * */
const Title = ({text, style}) => {
    return <Text style={[styles.container, {fontSize: 20, fontWeight: '700'}, !!style ? style : null]}>{text}</Text>;
}

const styles = StyleSheet.create({
    container: {
        color: '#212121'
    }
});

export default Title;
