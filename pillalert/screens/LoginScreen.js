import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CustomButtonPrimary from '../components/CustomButtonPrimary';
import CustomButtonSecondary from '../components/CustomButtonSecondary';
import CustomInput from '../components/CustomInput';
import CustomTitle from '../components/CustomTitle';

const LoginScreen = ({ onPassword, onLogin, onRegister }) => {
    const logo = require('../assets/logo.png');

    return (
        <>
            <Image source={logo} style={{ width: 150, height: 150 }} />
            <CustomTitle placeholder={'Bienvenido'} />
            <CustomInput placeholder={'Correo'} />
            <CustomInput placeholder={'Contraseña'} />
            <CustomButtonSecondary placeholder={'Olvide mi Contraseña'} onClick={onPassword} />
            <View style={styles.loginButtonGroup}>
                <CustomButtonPrimary placeholder={'Ingresar'} onClick={onLogin} />
                <CustomButtonPrimary placeholder={'Registrarse'} onClick={onRegister} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    loginButtonGroup: {
        marginTop: 40,
    },
});

export default LoginScreen;
