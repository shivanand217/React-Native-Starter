import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Components
const ComponentsScreen = () => {
    return <Text style={defaultStyle.textStyle}>This is a components screen</Text>;
}

// Stylesheet
const defaultStyle = StyleSheet.create({
    textStyle:{
        fontSize: 30
    },
    red: {
        color: '#9C27B0'
    }
});

// Export Component
export default ComponentsScreen;