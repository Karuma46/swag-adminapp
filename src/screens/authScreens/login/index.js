import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import colors from '../../../styles/variables/colors';
import Icons from '../../../components/text/icons';
import {H1, P} from '../../../components/text/text';
import LoginForm from './loginForm';

const Index = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      <StatusBar barStyle={colors.red} hidden={true} />
      <Icons
        name="arrow-left"
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.title}>
        <H1>Welcome Back...</H1>
        <P>Let's get dripping!</P>
      </View>

      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    borderLeftWidth: 5,
    borderLeftColor: colors.red,
  },
  title: {
    marginVertical: 50,
    marginLeft: 30,
  },
  backBtn: {
    marginLeft: 30,
    position: 'absolute',
    top: 30,
  },
});

export default Index;
