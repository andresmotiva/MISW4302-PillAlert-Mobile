import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButtonPrimary = ({ placeholder, onClick, addedStyles }) => {
    return (
        <TouchableOpacity style={[styles.button, addedStyles]} onPress={onClick}>
            <Text style={styles.text}>{placeholder}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: 150,
        height: 50,
        backgroundColor: '#95E1B7',
        borderRadius: 100,
        marginTop: 10,
    },
    text: {
        fontStyle: 'normal',
        fontSize: 16,
        color: '#FFFFFF',
    }
});

export default CustomButtonPrimary;
