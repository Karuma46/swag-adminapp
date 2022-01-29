import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/variables/colors';

const Icons = props => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 22}
      style={{...styles.icons, ...props.style}}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  icons: {
    color: colors.black,
    fontWeight: 700,
  },
});

export default Icons;
