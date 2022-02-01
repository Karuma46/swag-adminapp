import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {H1} from '../../components/text/text';
import ProductDetails from './productDetails';
import {ProductsProvider} from './productsContext';
import ProductsGrid from './productsGrid';

const ProductsStack = createNativeStackNavigator();

const ProductsScreen = () => {
  return (
    <View style={styles.wrap}>
      <ProductsProvider>
        <ProductsStack.Navigator>
          <ProductsStack.Screen
            name="productsGrid"
            component={ProductsGrid}
            options={{headerShown: false}}
          />

          <ProductsStack.Screen
            name="productDetails"
            component={ProductDetails}
            options={{headerShown: false}}
          />
        </ProductsStack.Navigator>
      </ProductsProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
    flex: 1,
  },
});

export default ProductsScreen;
