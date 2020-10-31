import React from 'react';
import {View, Button, Alert, Text, TouchableHighlight, StyleSheet, TouchableOpacity, Pressable, Platform} from "react-native";
import Title from "./Title";
import TextComponent from "./TextContent";

const News = (props) => {
    const handlePress = () => {
        console.log('123')
    }
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Title text={'Title'}/>
        </View>
        <TextComponent text={'Text Text Text'} />
        <Button title={'123'} onPress={() => {Alert.alert('123')}} color={'red'}/>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')}
        >
            <View style={[{backgroundColor: '#eae9e9', padding: 16, alignItems: 'center', borderRadius: 5, }, styles.shadows]}>
                <Text>Button</Text>
            </View>
        </TouchableHighlight>
        <TouchableOpacity
            activeOpacity={0.6}
            style={{marginTop: 20}}
            onPress={() => alert('Pressed!')}
        >
            <View style={[{backgroundColor: '#eae9e9', padding: 16, alignItems: 'center', borderRadius: 5, }, styles.shadows]}>
                <Text>Button</Text>
            </View>
        </TouchableOpacity>
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
                marginTop: 20,
            }, styles.shadows, spacingStyles.pt8])}
        >
            <View>
                <Text>Button</Text>
            </View>
        </Pressable>
    </View>;
}

const styles = StyleSheet.create({
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})

const flexStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    itemsCenter: {
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const spacingStyles = StyleSheet.create({
    pt4: {
        paddingTop: 4,
    },
    pt8: {
        paddingTop: 8,
    },
    pt12: {
        paddingTop: 12,
    },
    pt6: {
        paddingTop: 16,
    }
})

export default News;
