import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../services/api';
import {AuthContext} from '../../services/authContext';

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  var products = useProductsProvider();
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsProvider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const {isOnline} = useContext(AuthContext);

  const saveData = async data => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const refreshProducts = () => {
    if (isOnline) {
      setLoading(true);
      Api.products
        .get()
        .then(res => {
          setProducts(res.data);
          saveData(res.data);
          setLoading(false);
        })
        .catch(e => console.log(e));
    }
  };

  const getSavedProducts = async () => {
    try {
      await AsyncStorage.getItem('products').then(res => {
        setProducts(JSON.parse(res));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getter = id => {
    products.forEach(item => {
      if (item.id === id) {
        setProduct(item);
        return true;
      }
    });
    return false;
  };

  useEffect(() => {
    const getProducts = () => {
      if (isOnline) {
        setLoading(true);
        Api.products
          .get()
          .then(res => {
            setProducts(res.data);
            setLoading(false);
            saveData(res.data);
          })
          .catch(e => console.log());
      } else {
        getSavedProducts();
      }
    };

    getProducts();
  }, [isOnline]);

  return {products, getter, product, loading, refreshProducts};
};
