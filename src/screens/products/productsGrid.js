import React, {useState, useContext} from 'react';
import {View, StyleSheet, FlatList, Pressable} from 'react-native';
import {H1, H3} from '../../components/text/text';
import colors from '../../styles/variables/colors';
import {ProductsContext} from './productsContext';

const Product = ({data, navigation}) => {
  return (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate('productDetails')}>
      <View style={styles.itemImg}>
        <View />
      </View>
      <View style={styles.itemInfo}>
        <H3>{data.name}</H3>
      </View>
    </Pressable>
  );
};

const ProductsGrid = ({navigation}) => {
  let {products} = useContext(ProductsContext);
  return (
    <>
      <View style={styles.header}>
        <View>
          <H1>Products</H1>
        </View>
      </View>
      <View style={styles.grid}>
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={styles.column}
          renderItem={({item}) => (
            <Product data={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    marginTop: 20,
    paddingBottom: 50,
  },
  item: {
    width: '48%',
    marginBottom: 20,
    marginRight: 15,
  },
  itemImg: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
  },
  column: {},
});

export default ProductsGrid;
