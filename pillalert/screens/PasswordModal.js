import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import CustomButtonPrimary from '../components/CustomButtonPrimary';
import CustomInput from '../components/CustomInput';
import CustomTitleSmall from '../components/CustomTitleSmall';

const PasswordModal = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} transparent>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableWithoutFeedback onPress={onClose}>
                        <View style={styles.closeButton}>
                            <Ionicons name="ios-close" size={24} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.modalContainer}>
                        <CustomTitleSmall placeholder={'¿Olvidaste tu contraseña?'} />
                        <Text style={styles.text}>Ingresa tu correo electrónico registrado y te enviaremos un email de recuperación.</Text>
                        <CustomInput placeholder={'Email Registrado'} addedStyles={styles.input} />
                        <CustomButtonPrimary placeholder={'Recuperar Contraseña'} onClick={onClose} addedStyles={styles.button} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
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
    input: {
        width: 328,
    },
    button: {
        width: 200,
    }
});

export default PasswordModal;
