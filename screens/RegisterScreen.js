import React from 'react';
import { Image, StyleSheet } from 'react-native';

import CustomButtonBack from '../components/CustomButtonBack';
import CustomButtonPrimary from '../components/CustomButtonPrimary';
import CustomInput from '../components/CustomInput';
import CustomTitle from '../components/CustomTitle';

const RegisterScreen = ({ onRegister, onBack }) => {
    const logo = require('../assets/logo.png');
    
    return (
        <>
            <CustomButtonBack onClick={onBack} />
            <Image source={logo} style={{ width: 150, height: 150 }} />
            <CustomTitle placeholder={'Registro'} />
            <CustomInput placeholder={'Nombre'} />
            <CustomInput placeholder={'Contraseña'} />
            <CustomInput placeholder={'Repetir Contraseña'} />
            <CustomInput placeholder={'Corroe'} />
            <CustomButtonPrimary placeholder={'Registrarse'} onClick={onRegister} />
        </>
    );
};

const styles = StyleSheet.create({});

export default RegisterScreen;
