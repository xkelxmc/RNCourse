import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import CustomButton from "./CustomButton";

const Input = () => {
    const [text, setText] = useState('');
    const handlePress = () => {
        setText('Test');
    }
    return (
        <View style={{flex: 1, width: '100%', backgroundColor: '#d2d2d2', padding: 20, paddingTop: 65}}>
            <Text>{text}</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput style={styles.text} onChangeText={setText} value={text} maxLength={10} secureTextEntry={true}/>
                <CustomButton text={'+'} onPress={handlePress}/>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <TextInput style={styles.text} onChangeText={setText} value={text} multiline/>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <TextInput style={styles.text} onChangeText={setText} value={text} placeholder={'Test'} placeholderTextColor={'blue'}/>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <TextInput style={styles.text} onChangeText={setText} value={text} keyboardType={'numeric'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: { flex: 1, paddingVertical: 12, paddingHorizontal: 8, backgroundColor: '#ededed'}
})

export default Input;
