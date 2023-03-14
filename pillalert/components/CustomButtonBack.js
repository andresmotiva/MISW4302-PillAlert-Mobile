import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const CustomButtonBack = ({ onClick }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.closeButton}>
                <Ionicons name="ios-arrow-back" size={24} color="black" />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    closeButton: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,

        width: 40,
        height: 40,

        backgroundColor: 'rgba(73, 69, 79, 0.08)',
    },
});

export default CustomButtonBack;
