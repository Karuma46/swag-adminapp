import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {H2, P} from '../../components/text/text';
import colors from '../../styles/variables/colors';
import {OrdersContext} from './ordersContext';

const OrderDetailsScreen = ({route}) => {
  let {orderId} = route.params;
  let {getter, order} = useContext(OrdersContext);

  useEffect(() => {
    getter(orderId);
  }, [orderId, getter]);

  return (
    <View style={Styles.wrap}>
      {order !== null && (
        <>
          <View>
            <H2 style={{color: colors.black}}>Order No: {order.orderNumber}</H2>
            <P>14:09 | by {order.user.first_name} | Paid</P>
          </View>
          <View></View>
        </>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

export default OrderDetailsScreen;
