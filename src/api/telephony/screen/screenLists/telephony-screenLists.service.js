angular.module('ovh-api-services').service('OvhApiTelephonyScreenLists', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyScreenListsV6');
  },
}));
