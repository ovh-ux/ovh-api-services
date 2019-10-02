angular.module('ovh-api-services').service('OvhApiMePaymentMethod', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMePaymentMethodV6');
  },
}));
