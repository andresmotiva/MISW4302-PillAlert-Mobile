import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButtonWhite = ({ placeholder, onClick, addedStyles }) => {
    return (
        <TouchableOpacity style={[styles.button, addedStyles]} onPress={onClick}>
            <Text style={styles.text}>{placeholder}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        width: 150,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        marginTop: 10,
    },
    text: {
        fontStyle: 'normal',
        fontSize: 16,
        color: '#1C1B1F',
    }
});

export default CustomButtonWhite;
