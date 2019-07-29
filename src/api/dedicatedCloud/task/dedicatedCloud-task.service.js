angular.module('ovh-api-services').service('OvhApiDedicatedCloudTask', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudTaskV6');
  },
}));
