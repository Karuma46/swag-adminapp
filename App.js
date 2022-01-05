import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider, AuthContext} from './src/services/authContext';
import Api from './src/services/api';
import Splash from './src/screens/splash';
import Login from './src/screens/authScreens/login';
import HomeScreen from './src/screens/HomeScreen';
import AccountSettingsScreen from './src/screens/accountSettings';

const Stack = createNativeStackNavigator();

const Screens = () => {
  const {isAuth} = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="settings"
            component={AccountSettingsScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
