import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icons from '../../components/text/icons';
import {H3, P} from '../../components/text/text';
import colors from '../../styles/variables/colors';
import {OrdersContext} from './ordersContext';

const Itemlist = ({
  items,
  selectMode,
  onLongPress,
  selected,
  setSelected,
  onPress,
}) => {
  let {refreshOrders, loading} = useContext(OrdersContext);

  return (
    <>
      <FlatList
        data={items}
        onRefresh={() => refreshOrders()}
        refreshing={loading}
        renderItem={({item}) => (
          <TouchableOpacity
            style={Styles.item}
            onLongPress={() => onLongPress(item.item_details.id)}
            onPress={() => onPress(item.item_details.id)}>
            {selectMode && (
              <View style={Styles.selectIcon}>
                {[...selected].includes(item.item_details.id) ? (
                  <Icons name="check-square" size={16} />
                ) : (
                  <Icons name="square" size={16} />
                )}
              </View>
            )}
            <View style={Styles.thumb}>
              <View style={Styles.image} />
            </View>
            <View>
              <H3>{item.item_details.item_name} </H3>
              <View>
                <P>
                  {item.item_details.color &&
                    `Color: ${item.item_details.color} | `}
                  {item.item_details.size &&
                    `Size: ${item.item_details.size} | `}
                  Qty: {item.quantity} | {item.status}
                </P>
                <P>Kes {item.price}</P>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const Styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    display: 'flex',
    flexDirection: 'row',
  },
  thumb: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    backgroundColor: colors.lightGrey,
    width: '90%',
    height: '90%',
    borderRadius: 5,
  },
  selectIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 30,
  },
});

export default Itemlist;
