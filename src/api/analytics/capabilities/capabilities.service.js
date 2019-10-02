angular.module('ovh-api-services').service('OvhApiAnalyticsCapabilities', ($injector) => ({
  v6() {
    return $injector.get('OvhApiAnalyticsCapabilitiesV6');
  },
}));
