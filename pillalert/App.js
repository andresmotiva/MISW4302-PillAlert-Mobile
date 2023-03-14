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

export default function App() {
  const {width} = Dimensions.get('window');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayRegister, setDisplayRegister] = useState(false);
  const [displayForgotPassword, setDisplayForgotPassword] = useState(false);


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
      <View style={styles.container}>
        <Text>logged In</Text>
        <Button title="Close" onPress={() => handleDisplayLogin()} />
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
  loginButtonGroup: {
    marginTop: 40,
  },
});
