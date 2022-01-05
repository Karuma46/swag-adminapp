import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainButton from '../../components/buttons/mainButton';

const AuthButtons = ({navigation}) => {
  return (
    <View style={styles.authButtons}>
      <MainButton
        styles={styles.buttons}
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <MainButton title="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  authButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
  },
  buttons: {
    marginHorizontal: 20,
  },
});

export default AuthButtons;
