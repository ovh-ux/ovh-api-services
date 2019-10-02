angular.module('ovh-api-services').service('OvhApiOrderCart', ($injector) => ({
  Item() {
    return $injector.get('OvhApiOrderCartItem');
  },
  Microsoft() {
    return $injector.get('OvhApiOrderCartMicrosoft');
  },
  Product() {
    return $injector.get('OvhApiOrderCartProduct');
  },
  ServiceOption() {
    return $injector.get('OvhApiOrderCartServiceOption');
  },
  v6() {
    return $injector.get('OvhApiOrderCartV6');
  },
}));
