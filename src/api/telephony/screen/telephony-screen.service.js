angular.module('ovh-api-services').service('OvhApiTelephonyScreen', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyScreenV6');
  },
  ScreenLists() {
    return $injector.get('OvhApiTelephonyScreenLists');
  },
}));
