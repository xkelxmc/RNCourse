import React from "react";
import {Button} from "react-native";

const Btn = ({title, onPress}) => {
    return <Button title={title} onPress={onPress} />;
}

export default Btn
