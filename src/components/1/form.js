import React, {useState} from "react";
import {TextInput, View} from "react-native";
import Btn from "./btn";

const Form = ({onCreate}) => {
    const [value, setValue] = useState('');
    const handlePress = () => {
        onCreate(value);
        setValue('');
    }
    return <View>
        <TextInput value={value} onChangeText={setValue} style={{backgroundColor:'red'}}/>
        <Btn onPress={handlePress} title={'Add'} />
    </View>;
}

export default Form
