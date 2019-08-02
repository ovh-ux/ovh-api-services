angular.module('ovh-api-services').service('OvhApiOrderCdnDedicatedBackend', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderCdnDedicatedBackendV6');
  },
}));
