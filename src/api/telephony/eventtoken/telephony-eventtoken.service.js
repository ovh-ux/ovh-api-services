angular.module('ovh-api-services').service('OvhApiTelephonyEventtoken', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEventtokenV6');
  },
}));
