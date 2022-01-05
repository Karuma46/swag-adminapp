import React from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import OrdersScreen from './orders';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsScreen from './products';
import colors from '../styles/variables/colors';
import Logo from '../../assets/images/white-ss-logo.svg';
import Icons from '../components/text/icons';
import PaymentsScreen from './payments';

const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar backgroundColor={colors.red} />
      <View style={styles.header}>
        <Logo width={150} height={29} />
        <View style={styles.rightHeader}>
          <Icons
            name="user"
            style={{color: colors.white}}
            onPress={() => navigation.navigate('settings')}
          />
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.red,
            color: colors.white,
          },
        }}>
        <Tab.Screen
          name="orders"
          component={OrdersScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Icons name="list" style={{color: colors.white}} />
            ),
          }}
        />
        <Tab.Screen
          name="products"
          component={ProductsScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Icons name="package" style={{color: colors.white}} />
            ),
          }}
        />

        <Tab.Screen
          name="payments"
          component={PaymentsScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Icons name="dollar-sign" style={{color: colors.white}} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: colors.red,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
