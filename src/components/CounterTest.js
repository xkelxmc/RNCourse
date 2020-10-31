import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from "./CustomButton";

const CounterTest = (props) => {
    const [count, setCount] = useState(0);
    const upper = () => {
        setCount(prev => prev + 1);
    }
    const down = () => {
        setCount(prev => prev - 1);
    }

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomButton text={'+'} onPress={upper}/>
            <View style={{paddingHorizontal: 20}}>
            <Text>{count}</Text>
            </View>
            <CustomButton text={'-'} onPress={down}/>
        </View>
    )

}

export default CounterTest;
