import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import colors from '../../styles/variables/colors';
import {H3, P} from '../../components/text/text';
import getDate from '../../utils/dates';

const OrderListItem = ({order, navigation}) => {
  return (
    <Pressable
      style={styles.order}
      android_ripple={{color: colors.lightGrey}}
      onPress={() => navigation.navigate('orderDetails', {orderId: order.id})}>
      <View style={styles.orderAvatar}>
        <View style={styles.avatar} />
      </View>
      <View style={styles.orderDetails}>
        <View style={styles.orderTitle}>
          <H3>{order.orderNumber}</H3>
          <P>{getDate(order.date_created)}</P>
        </View>
        <View style={styles.orderItems}>
          {order.items.length > 0 &&
            order.items.map(item => (
              <P key={item.id}>
                {item.item_details.item_name} - x{item.quantity} (
                {item.item_details.color}
                {item.item_details.size !== null &&
                  ', ' + item.item_details.size}
                )
              </P>
            ))}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  order: {
    paddingVertical: 10,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    display: 'flex',
    flexDirection: 'row',
  },
  orderAvatar: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
  },
  orderDetails: {
    width: '80%',
  },
  avatar: {
    backgroundColor: colors.lightGrey,
    width: '90%',
    height: '90%',
    borderRadius: 5,
  },
  orderTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderItems: {
    paddingVertical: 10,
  },
});

export default OrderListItem;
