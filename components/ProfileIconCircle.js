import React, { TouchableWithoutFeedback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileIconCircle = ({ placeholder, extraStyles }) => {
    return (
        <View style={[styles.icon, extraStyles]}>
            <Text>{placeholder}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,

        minWidth: 50,
        minHeight: 50,

        backgroundColor: '#A6DFBA',
    },
});

export default ProfileIconCircle;
