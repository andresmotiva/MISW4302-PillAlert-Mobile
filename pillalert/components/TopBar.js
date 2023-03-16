import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback, Modal, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButtonWhite from './CustomButtonWhite';
import CustomButtonSecondary from './CustomButtonSecondary';
import CustomInput from './CustomInput';
import CustomTitle from './CustomTitle';
import CustomTitleSmall from './CustomTitleSmall';
import ProfileIconCircle from './ProfileIconCircle';
import ResetPasswordModal from '../screens/ResetPasswordModal';

const TopBar = ({ onLogout }) => {
    const logo = require('../assets/logo.png');
    const [displayModalProfile, setDisplayModalProfile] = useState(false);
    const [displayPasswordModal, setDisplayPasswordModal] = useState(false);

    useEffect(() => {
        if (displayModalProfile) {
            setDisplayPasswordModal(false);
            return;
        }
        return;
    }, [displayModalProfile])

    useEffect(() => {
        if (displayPasswordModal) {
            setDisplayModalProfile(false);
            return;
        }
        return;
    }, [displayPasswordModal])

    return (
        <>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => setDisplayModalProfile(true)}>
                    <View style={styles.topBar}>
                        <CustomInput placeholder={'Buscar'} addedStyles={styles.topBarSearch} />
                        <ProfileIconCircle placeholder={'ID'} />
                    </View>
                </TouchableWithoutFeedback>
                {displayModalProfile && <Modal visible={displayModalProfile} transparent>
                    <TouchableWithoutFeedback onPress={() => setDisplayModalProfile(false)}>
                        <View style={styles.modalOverlay}>
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.topBarModal}>
                                        <ProfileIconCircle placeholder={'ID'} />
                                        <View style={styles.topBarModalName}>
                                            <Text style={styles.topBarModalNameBold}>Ivan Dario</Text>
                                            <Text>ivan@gmail.com</Text>
                                        </View>
                                    </View>

                                    <CustomButtonWhite
                                        placeholder={'Cambiar Contraseña'}
                                        onClick={() => setDisplayPasswordModal(true)}
                                        addedStyles={styles.button}
                                    />
                                    <CustomButtonWhite
                                        placeholder={'Salir'}
                                        onClick={onLogout}
                                        addedStyles={styles.button}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>}
                {displayPasswordModal && <ResetPasswordModal onClose={() => setDisplayPasswordModal(false)} visible={displayPasswordModal} />}
            </View>            
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
    },
    // TOPBAR
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 20,
        height: 'auto',
    },
    topBarModal: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 'auto',
        width: 280,
    },
    topBarModalName: {
        marginLeft: 10
    },
    topBarModalNameBold: {
        fontWeight: 700,
    },
    topBarSearch: {
        width: 280,
        height: 50,
        marginRight: 10,
    },
    // MODAL
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 120,
    },
    modalContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#A6DFBA',
        borderRadius: 28,
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
        alignSelf: 'flex-start',
    }
});

export default TopBar;
