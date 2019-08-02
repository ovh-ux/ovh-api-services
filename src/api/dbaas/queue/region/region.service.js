angular.module('ovh-api-services').service('OvhApiDbaasQueueRegion', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasQueueRegionV6');
  },
}));
