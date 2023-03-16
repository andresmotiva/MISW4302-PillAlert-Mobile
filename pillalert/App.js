import React, { useState } from 'react';
import {
  Button, Dimensions, KeyboardAvoidingView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from './screens/LoginScreen';
import PasswordModal from './screens/PasswordModal';
import RegisterScreen from './screens/RegisterScreen';
import TopBar from './components/TopBar';
import Alarm from './components/Alarm';
import CustomButtonPrimary from './components/CustomButtonPrimary';
import CreateAlarm from './components/CreateAlarm';

export default function App() {
  const {width} = Dimensions.get('window');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayRegister, setDisplayRegister] = useState(false);
  const [displayForgotPassword, setDisplayForgotPassword] = useState(false);

  const [createModal, displayCreateModal] = useState(false);


  const handleDisplayLogin = () => {
    setDisplayLogin(true);

    setDisplayRegister(false);
    setDisplayForgotPassword(false);
    setIsLoggedIn(false);
  };

  const handleDisplayPassword = () => {
    setDisplayForgotPassword(true);
  };

  const handleDisplayRegister = () => {
    setDisplayRegister(true);

    setDisplayLogin(false);
    setDisplayForgotPassword(false);
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);

    setDisplayLogin(false);
    setDisplayRegister(false);
    setDisplayForgotPassword(false);
  };

  if (isLoggedIn) {
    return (
      <View style={styles.containerAlarm}>
        <TopBar onLogout={handleDisplayLogin} />
        <Alarm name={'Despertar'} time={'5:10 a.m.'} dateArray={['Lun', 'Mar', 'Mie', 'Jue', 'Vie']} />
        <Alarm name={'Losartan 75mg'} time={'7:00 a.m.'} count={'8 de 24'} timeDetail={'Cada 12h'} />
        <CustomButtonPrimary onClick={() => displayCreateModal(true)} addedStyles={styles.bottomButton} placeholder={'Nueva Alarma'}  />
        {createModal && <CreateAlarm onClose={() => displayCreateModal(false)} visible={createModal} />}
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, {width}]}
      behavior="padding">
      {displayLogin && (
        <LoginScreen
          onLogin={handleLogin}
          onPassword={handleDisplayPassword}
          onRegister={handleDisplayRegister}
        />
      )}
      {displayRegister && (
        <RegisterScreen onBack={handleDisplayLogin} onRegister={handleLogin} />
      )}
      {displayForgotPassword && (
        <PasswordModal visible={true} onClose={handleDisplayLogin} />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAlarm: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginButtonGroup: {
    marginTop: 40,
  },
  bottomButton: {
    position: 'absolute', 
    bottom: 40,
  }
});
