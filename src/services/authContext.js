import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from './api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  var auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuthProvider = () => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setAuth = async token => {
    try {
      await AsyncStorage.setItem('authtoken', token).then(() => {
        setIsAuth(true);
      });
    } catch (e) {
      return false;
    }
    return true;
  };

  const signOut = () => {
    Api.logout.post().then(() => {
      unsetAuth();
    });
  };

  const unsetAuth = async () => {
    try {
      await AsyncStorage.removeItem('authtoken').then(() => {
        setIsAuth(false);
        setUser(null);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Api.isauth
      .get()
      .then(res => {
        setUser(res.data);
        setIsAuth(true);
        setIsLoading(false);
        console.log('Called!');
      })
      .catch(error => {
        console.log(error);
        unsetAuth();
        setIsLoading(null);
      });
  }, [isAuth]);

  return {user, isAuth, setAuth, signOut, isLoading};
};
