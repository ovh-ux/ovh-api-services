angular.module('ovh-api-services').service('OvhApiTelephonyTrunks', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyTrunksV6');
  },
}));
