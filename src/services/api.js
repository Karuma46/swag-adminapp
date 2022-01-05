import Call from './axios';

const Api = () => {
  var setUrl = path => {
    return new Call(path);
  };

  return {
    server_url: setUrl(),
    isauth: setUrl('users/is_auth/'),
    auth: setUrl('rest-auth/login/'),
    logout: setUrl('rest-auth/logout/'),
    notifications: setUrl('notifications/list/'),
    // users
    users: setUrl('users/list/'),
    //
    orders: setUrl('orders/orders/'),
    payments: setUrl('orders/payment/'),
    orderitems: setUrl('orders/orderitems/'),
    //
    categories: setUrl('catalog/categories/'),
    subcategories: setUrl('catalog/subcategories/'),
    genders: setUrl('catalog/genders/'),
    //shops
    shops: setUrl('shops/list/'),
    shoplocation: setUrl('shops/details/'),
    shopusers: setUrl('shops/shopusers/'),
    //catalogue
    products: setUrl('catalog/products/'),
    inventory: setUrl('catalog/inventory/'),
    images: setUrl('catalog/images/'),
    sizes: setUrl('catalog/sizes/'),
    sizeclass: setUrl('catalog/sizeclass/'),
  };
};

export default Api();
