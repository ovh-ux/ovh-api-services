angular.module('ovh-api-services').service('OvhApiTelephonySpare', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonySpareV6');
  },
}));
