angular.module('ovh-api-services').service('OvhApiEmailExchangeServiceServer', ($injector) => ({
  v6() {
    return $injector.get('OvhApiEmailExchangeServiceServerV6');
  },
}));
