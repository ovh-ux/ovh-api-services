angular.module('ovh-api-services').service('OvhApiDedicatedServerInterface', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerInterfaceV6');
  },
}));
