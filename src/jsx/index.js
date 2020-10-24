import React from "react";
import {View,Text, Image} from "react-native";

const element = <View />;
const elementEx = React.createElement(View,null);

const baz = 42;

const element2 = <View foo="hello" bar={baz} />;
const element2Ex = React.createElement(View,{foo:"hello",bar:baz});

const element3 = (
    <View>
        <Text a={"b"}/>
        <Image />
    </View>
)
const element3Ex =
    React.createElement(View,null,
        React.createElement(Text,{a: "b"}),
        React.createElement(Image,null)
    );
