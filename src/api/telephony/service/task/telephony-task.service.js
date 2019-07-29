angular.module('ovh-api-services').service('OvhApiTelephonyServiceTask', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyServiceTaskV6');
  },
}));
