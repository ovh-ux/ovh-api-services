angular.module('ovh-api-services').service('OvhApiTelephonyLineAll', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiTelephonyLineAllAapi');
  },
}));
