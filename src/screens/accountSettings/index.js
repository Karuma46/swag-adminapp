import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {H1, P} from '../../components/text/text';
import colors from '../../styles/variables/colors';
import {AuthContext} from '../../services/authContext';

const AccountSettingsScreen = () => {
  let {signOut} = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <H1>My Account</H1>
      <View style={styles.listItem}>
        <P onPress={() => signOut()}>Logout</P>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginVertical: 15,
  },
});

export default AccountSettingsScreen;
