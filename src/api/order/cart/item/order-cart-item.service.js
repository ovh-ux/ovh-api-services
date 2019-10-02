angular.module('ovh-api-services').service('OvhApiOrderCartItem', ($injector) => ({
  Configuration() {
    return $injector.get('OvhApiOrderCartItemConfiguration');
  },
  v6() {
    return $injector.get('OvhApiOrderCartItemV6');
  },
}));
