angular.module('ovh-api-services').service('OvhApiDedicatedCloudOption', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudOptionV6');
  },
}));
