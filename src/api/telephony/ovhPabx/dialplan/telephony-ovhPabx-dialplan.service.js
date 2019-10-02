angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplan', ($injector) => ({
  Extension() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtension');
  },
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanV6');
  },
}));
