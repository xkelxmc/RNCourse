import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Counter = () => {
    return <View style={styles.root}>
        <View style={styles.header}/>
        <View style={styles.content}>
            <Text style={styles.text}>123</Text>
        </View>
        <View style={styles.footer}/>
    </View>;
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        height: 60,
        backgroundColor: 'blue',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        height: 100,
        backgroundColor: '#c5fac5',
    },
    text: {
        fontSize: 32,
        color: 'red',
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default Counter;
