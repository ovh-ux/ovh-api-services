angular.module('ovh-api-services').service('OvhApiVrackDedicatedCloud', $injector => ({
  v6() {
    return $injector.get('OvhApiVrackDedicatedCloudV6');
  },
}));
