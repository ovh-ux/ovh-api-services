angular.module('ovh-api-services').service('OvhApiDedicatedCephUser', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCephUserV6');
  },
  Pool() {
    return $injector.get('OvhApiDedicatedCephUserPool');
  },
  Aapi() {
    return $injector.get('OvhApiDedicatedCephUserAapi');
  },
}));
