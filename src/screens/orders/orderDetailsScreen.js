import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {H2, H3, P} from '../../components/text/text';
import colors from '../../styles/variables/colors';
import {OrdersContext} from './ordersContext';
import Itemlist from './Itemlist';
import {SecButton} from '../../components/buttons/mainButton';
import getDate from '../../utils/dates';
import Api from '../../services/api';

const OrderDetailsScreen = ({route}) => {
  let {orderId} = route.params;
  let {getter, order} = useContext(OrdersContext);
  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLongPress = id => {
    setSelected([...selected, id]);
    setSelectMode(true);
  };

  const handleSelection = id => {
    if (selectMode) {
      if ([...selected].includes(id)) {
        var arr = [...selected];
        var index = arr.indexOf(id);
        arr.splice(index, 1);
        setSelected(arr);
      } else {
        setSelected([...selected, id]);
      }
    }
  };

  const undoSelection = () => {
    setSelected([]);
    setSelectMode(false);
  };

  const patchOrderItemStatus = (id, params) => {
    return Api.orderitems.patch(id, params);
  };

  const handleOrderItems = () => {
    setLoading(true);
    if (selected.length > 0) {
      [...selected].forEach(item => {
        patchOrderItemStatus(item, {status: 'CONFIRMED'});
      });
    }
  };

  useEffect(() => {
    getter(orderId);
  }, [orderId, getter]);

  return (
    <View style={Styles.wrap}>
      {order !== null && (
        <>
          <View>
            <H2 style={{color: colors.black}}>Order No: {order.orderNumber}</H2>
            <P>
              {getDate(order.date_created)} | by {order.user.first_name} |{' '}
              {order.status}
            </P>
          </View>
          <View style={Styles.itemList}>
            <Itemlist
              selectMode={selectMode}
              items={order.items}
              onLongPress={handleLongPress}
              onPress={handleSelection}
              selected={selected}
            />
          </View>
          {selectMode && (
            <View style={Styles.buttonsView}>
              <SecButton
                title="Confirm Selected"
                loading={loading}
                onPress={handleOrderItems}
              />
              <SecButton title="Cancel" onPress={undoSelection} />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  itemList: {
    marginTop: 30,
  },
  buttonsView: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default OrderDetailsScreen;
