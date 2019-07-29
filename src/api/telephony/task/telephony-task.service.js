angular.module('ovh-api-services').service('OvhApiTelephonyTask', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyTaskV6');
  },
}));
