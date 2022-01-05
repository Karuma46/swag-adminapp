import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {H1} from '../../components/text/text';
import LoadingComponent from '../../components/loadingComponent';
import OrderListItem from './orderListItem';
import {OrdersContext} from './ordersContext';

const OrdersListScreen = ({navigation}) => {
  let {orders, loading} = useContext(OrdersContext);

  return (
    <>
      <View style={styles.header}>
        <View>
          <H1>Orders</H1>
        </View>
      </View>

      <View style={styles.body}>
        {loading ? (
          <LoadingComponent />
        ) : (
          orders.length > 0 && (
            <FlatList
              data={orders}
              keyExtractor={order => order.id}
              renderItem={({item}) => (
                <OrderListItem order={item} navigation={navigation} />
              )}
            />
          )
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
});

export default OrdersListScreen;
