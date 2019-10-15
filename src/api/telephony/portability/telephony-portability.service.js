angular.module('ovh-api-services').service('OvhApiTelephonyPortability', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyPortabilityV6');
  },
  PortabilityDocument() {
    return $injector.get('OvhApiTelephonyPortabilityDocument');
  },
}));
