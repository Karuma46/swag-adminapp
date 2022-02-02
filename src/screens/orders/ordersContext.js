import React, {useState, createContext, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../services/api';
import {AuthContext} from '../../services/authContext';

export const OrdersContext = createContext();

export const OrdersProvider = ({children}) => {
  var orders = useOrdersProvider();
  return (
    <OrdersContext.Provider value={orders}>{children}</OrdersContext.Provider>
  );
};

const useOrdersProvider = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);
  const {isOnline} = useContext(AuthContext);

  const saveData = async data => {
    try {
      await AsyncStorage.setItem('orders', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const refreshOrders = () => {
    if (isOnline) {
      setLoading(true);
      Api.orders
        .get()
        .then(res => {
          setOrders(res.data);
          saveData(res.data);
          setLoading(false);
        })
        .catch(e => console.log(e));
    }
  };

  const getSavedOrders = async () => {
    try {
      await AsyncStorage.getItem('orders').then(res => {
        setOrders(JSON.parse(res));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getter = id => {
    orders.forEach(item => {
      if (item.id === id) {
        setOrder(item);
        return true;
      }
    });
    return false;
  };

  useEffect(() => {
    const getOrders = () => {
      if (isOnline) {
        setLoading(true);
        Api.orders
          .get()
          .then(res => {
            setOrders(res.data);
            saveData(res.data);
            setLoading(false);
          })
          .catch(e => console.log(e));
      } else {
        getSavedOrders();
      }
    };

    getOrders();
  }, [isOnline]);

  return {loading, orders, getter, order, refreshOrders};
};
