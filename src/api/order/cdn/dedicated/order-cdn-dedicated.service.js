angular.module('ovh-api-services').service('OvhApiOrderCdnDedicated', ($injector) => ({
  Backend() {
    return $injector.get('OvhApiOrderCdnDedicatedBackend');
  },
  v6() {
    return $injector.get('OvhApiOrderCdnDedicatedV6');
  },
}));
