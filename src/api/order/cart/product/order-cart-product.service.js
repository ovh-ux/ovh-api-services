angular.module('ovh-api-services').service('OvhApiOrderCartProduct', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartProductV6');
  },
}));
