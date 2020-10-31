import React from 'react';
import {Platform, Pressable, Text, View} from "react-native";

const CustomButton = ({onPress, text}) => {
    const handlePress = () => {
        onPress();
    }
    return (
        <Pressable
            android_ripple={{
                color: 'blue',
                borderless: false,
            }}
            hitSlop={20}
            onPress={handlePress}
            style={({pressed}) => ([{
                opacity: Platform.OS === 'ios' ? pressed ? 0.5 : 1 : 1,
                backgroundColor: '#eae9e9',
                padding: 16,
                alignItems: 'center',
                borderRadius: 5,
            }])}
        >
            <View>
                <Text>{text}</Text>
            </View>
        </Pressable>
    )
}

export default CustomButton;
