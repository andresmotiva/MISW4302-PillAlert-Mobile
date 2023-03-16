import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CustomInput = ({ placeholder, addedStyles }) => {
    const [value, setValue] = useState('');

    const handleInputChange = (value) => {
        setValue(value);
    }

    return (
        <TextInput
            style={[styles.input, addedStyles]}
            value={value}
            onChangeText={value => handleInputChange(value)}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,

        width: 210,
        height: 56,

        background: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#A6DFBA',
        borderRadius: 28,
        marginTop: 32,

        fontStyle: 'normal',
        fontSize: 16,

        color: '#2F3D40',

        overflow: 'hidden'
    },
});

export default CustomInput;
