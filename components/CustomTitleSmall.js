import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomTitleSmall = ({ placeholder }) => {
    return (
        <Text style={styles.title}>{placeholder}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 28,

        marginBottom: 10,

        textAlign: 'center',

        color: '#313033',
    },
});

export default CustomTitleSmall;
