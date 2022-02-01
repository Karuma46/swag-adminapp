import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../services/api';

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

  const saveData = async data => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(data));
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
      setLoading(true);
      Api.products
        .get()
        .then(res => {
          setProducts(res.data);
          setLoading(false);
          saveData(res.data);
        })
        .catch(e => console.log());
    };

    getProducts();
  }, []);

  return {products, getter, product, loading};
};
