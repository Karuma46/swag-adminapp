import React, {useContext} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {AuthContext} from '../../services/authContext';
import colors from '../../styles/variables/colors';
import Logo from '../../../assets/images/white-ss-logo.svg';
import AuthButtons from './authButtons';

const Splash = ({navigation}) => {
  const {isLoading} = useContext(AuthContext);

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={colors.red} />
      <View style={styles.logoArea}>
        <Logo style={styles.logo} />
      </View>
      {!isLoading ? <AuthButtons navigation={navigation} /> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.red,
    flex: 1,
  },
  logoArea: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    textAlign: 'center',
    color: colors.white,
    width: 256,
    height: 50,
  },
});

export default Splash;
