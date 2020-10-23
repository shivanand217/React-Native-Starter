import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Components
const ComponentsScreen = () => {
    const greet = <Text style={Object.assign({}, defaultStyle.textStyle, defaultStyle.paddingTop)}> Welcome to react-native world </Text>
    
    return (
        <View style={defaultStyle.paddingTop}>
            <Text style={defaultStyle.textStyle}>This is a components screen</Text>
            {greet}
        </View>
    );
};

// Stylesheet
const defaultStyle = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    red: {
        color: '#9C27B0'
    },
    paddingTop: {
        paddingTop: 10
    },
    paddingLeft: {
        paddingLeft: 10
    },
    paddingRight: {
        paddingRight: 10
    },
    paddingBottom: {
        paddingBottom: 10
    }
});

// Export Component
export default ComponentsScreen;