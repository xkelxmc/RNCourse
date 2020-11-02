import React, {useState} from "react";
import {Text, View} from "react-native";
import Form from "./form";

const List = () => {
    const [items, setItems] = useState([])
    const handleCreate = (text) => {
        setItems(prev => [...prev, text])
    }
    return <View>
        <Form onCreate={handleCreate} />
        {items.map((item, index) => (
            <View key={index}>
              <Text>{item}</Text>
            </View>
        ))}
    </View>;
}

export default List
