import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Icons from '../text/icons';
import colors from '../../styles/variables/colors';

export const SecButton = props => {
  return (
    <Pressable
      style={{...props.styles, ...styles.button, ...styles.secButton}}
      onPress={props.onPress}
      android_ripple={styles.secRipple}>
      {props.loading ? (
        <Icons name="loader" style={styles.secLoader} />
      ) : (
        <Text style={{...styles.title, ...styles.secTitle}}>{props.title}</Text>
      )}
    </Pressable>
  );
};

const MainButton = props => {
  return (
    <Pressable
      style={{...props.styles, ...styles.button}}
      onPress={props.onPress}
      android_ripple={styles.ripple}>
      {props.loading ? (
        <Text>
          <Icons name="loader" style={styles.loader} />
        </Text>
      ) : (
        <Text style={styles.title}> {props.title} </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    height: 45,
    width: 120,
    borderRadius: 5,
    marginVertical: 30,
    overflow: 'hidden',
  },
  secButton: {
    backgroundColor: colors.red,
  },
  title: {
    color: colors.red,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  secTitle: {
    color: colors.white,
  },
  ripple: {
    color: colors.grey,
  },
  secRipple: {
    color: colors.darkRed,
  },
  loader: {
    color: colors.red,
  },
  secLoader: {
    color: colors.white,
  },
});

export default MainButton;
