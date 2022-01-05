import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import OrderDetailsScreen from './orderDetailsScreen';
import OrdersListScreen from './ordersListScreen';
import {OrdersProvider} from './ordersContext';

const OrdersStack = createNativeStackNavigator();

const OrdersScreen = () => {
  return (
    <View style={styles.wrap}>
      <OrdersProvider>
        <OrdersStack.Navigator>
          <OrdersStack.Screen
            name="ordersList"
            component={OrdersListScreen}
            options={{headerShown: false}}
          />
          <OrdersStack.Screen
            name="orderDetails"
            component={OrderDetailsScreen}
            options={{headerShown: false}}
          />
        </OrdersStack.Navigator>
      </OrdersProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
    flex: 1,
  },
});

export default OrdersScreen;
