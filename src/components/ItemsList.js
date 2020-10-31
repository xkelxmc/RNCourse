import React, {useState} from 'react'
import {View, Text, FlatList, ActivityIndicator} from "react-native";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
const ItemsList = (props) => {
    const [refreshing, setRefreshing] = useState(false);
    const renderItem = ({item}) => {
        return <View style={{backgroundColor: 'green', marginBottom: 12, padding: 8, height: 100}}><Text>{item.title}</Text></View>
    }
    const handleRefres = () => {
        setRefreshing(true);
    }
    return <View style={{flex: 1, width: '100%', backgroundColor: '#d2d2d2', paddingTop: 65, paddingBottom: 60}}>
        <Text>Header 1</Text>
        <FlatList
            contentContainerStyle={{
                paddingHorizontal: 20
            }}
            ListHeaderComponent={() => {
                return <View><Text>Header</Text></View>
            }}
            ListFooterComponent={() => {
                return <ActivityIndicator/>
            }}
            ListEmptyComponent={() => {
                return <View><Text>Empty</Text></View>
            }}
            refreshing={refreshing}
            onRefresh={handleRefres}
            data={DATA}
            initialNumToRender={10}
            onEndReached={() => {
                console.log('123')
            }}
            onEndReachedThreshold={0.2}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
        />
    </View>
}

export default ItemsList;
