import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../styles/variables/colors';

export const H1 = props => {
  return <Text style={{...styles.H1, ...props.style}}>{props.children}</Text>;
};

export const H2 = props => {
  return <Text style={{...styles.H2, ...props.style}}>{props.children}</Text>;
};

export const H3 = props => {
  return <Text style={{...styles.H3, ...props.style}}>{props.children}</Text>;
};

export const P = props => {
  return (
    <Text style={{...styles.P, ...props.style}} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  H1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: colors.black,
  },
  H2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.black,
  },
  H3: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.black,
  },
  P: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: colors.black,
  },
});
