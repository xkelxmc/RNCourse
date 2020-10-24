import React from "react";
import {Text} from "react-native";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Марья',
    lastName: 'Моревна'
};

const element = (
    <Text>
        Здравствуй, {formatName(user)}!
    </Text>
);

// https://codepen.io/xkelgames/pen/NWrdwwV?editable=true&editors=0010
