import React, {useState} from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import colors from '../../styles/variables/colors';

const InputText = props => {
  const [inputStyle, setInputStyle] = useState({});

  const handleFocus = () => {
    setInputStyle({...inputStyle, borderColor: colors.black});
  };

  const handleBlur = () => {
    setInputStyle({});
  };

  return (
    <>
      <TextInput
        style={[styles.input, inputStyle, props.error && styles.error]}
        value={props.value}
        onChangeText={props.onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={colors.grey}
        {...props}
      />
      <Text style={styles.errorText}>{props.error ? props.error : ''}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginVertical: 10,
    color: colors.black,
    paddingLeft: 10,
    fontFamily: 'Quicksand-Bold',
  },
  error: {
    borderColor: colors.red,
    color: colors.red,
  },
  errorText: {
    color: colors.red,
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
  },
});

export default InputText;
