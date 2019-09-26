angular.module('ovh-api-services').service('OvhApiDedicatedServerOla', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerOlaV6');
  },
}));
