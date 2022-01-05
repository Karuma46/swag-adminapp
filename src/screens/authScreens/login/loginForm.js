import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {AuthContext} from '../../../services/authContext';
import {SecButton} from '../../../components/buttons/mainButton';
import Api from '../../../services/api';
import InputText from '../../../components/inputs/InputText';

const LoginForm = () => {
  const [email, setEmail] = useState('stevekaruma@gmail.com');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('karuma');
  const {setAuth} = useContext(AuthContext);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    result: null,
  });

  const handleEmail = () => {
    if (email === null || email === '') {
      var obj = errors;
      setErrors({...obj, email: 'Email is required!'});
      return false;
    }
    return true;
  };

  const handlePassword = () => {
    if (password === null || password === '') {
      var obj = errors;
      setErrors({...obj, password: 'Password is required!'});
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (handleEmail() && handlePassword()) {
      let payload = {
        email: email,
        password: password,
      };
      setLoading(true);
      Api.auth
        .post(payload)
        .then(res => {
          setLoading(false);
          setAuth(res.data.key);
        })
        .catch(e => {
          setLoading(false);
          console.log(e.toJSON());
        });
    } else {
      console.log(errors);
    }
  };

  return (
    <View style={styles.form}>
      <InputText
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
        error={errors.email}
        onKeyPress={() => setErrors({...errors, email: null})}
      />
      <InputText
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
        textContentType="password"
        onSubmitEditing={handleSubmit}
        error={errors.password}
        onKeyPress={() => setErrors({...errors, password: null})}
      />
      <SecButton title="Sign In" onPress={handleSubmit} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    marginLeft: 30,
  },
});

export default LoginForm;
