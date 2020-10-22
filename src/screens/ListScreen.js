import React from 'react';
import { View, Text, Stylesheet, FlatList } from 'react-native';


// Components
const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'}
    ];

    // Flat list required data prop and renderItem to render a list

    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text> {item.name} </Text>
            }} 
        />
    )
};

// const styles = Stylesheet.create({

// });

// export this component
export default ListScreen;