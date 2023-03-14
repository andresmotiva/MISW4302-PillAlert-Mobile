import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButtonSecondary = ({ placeholder, onClick }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.text}>{placeholder}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 210,
        alignItems: 'flex-end',
        marginTop: 10,
    },
    text: {
        fontStyle: 'normal',
        fontSize: 14,
        textDecorationLine: 'underline',
        color: '#2F3D40',
    }
});

export default CustomButtonSecondary;
