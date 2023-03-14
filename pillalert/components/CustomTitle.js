import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomTitle = ({ placeholder }) => {
    return (
        <Text style={styles.title}>{placeholder}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,

        marginBottom: 64,

        textAlign: 'center',

        color: '#313033',
    },
});

export default CustomTitle;
