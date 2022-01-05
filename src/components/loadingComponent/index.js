import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../styles/variables/colors';
import Icon from 'react-native-vector-icons/Feather';

const LoadingComponent = () => {
  return (
    <View style={styles.wrap}>
      <Icon name="loader" size={40} style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: colors.grey,
  },
});

export default LoadingComponent;
