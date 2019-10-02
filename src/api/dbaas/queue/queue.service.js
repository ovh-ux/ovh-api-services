angular.module('ovh-api-services').service('OvhApiDbaasQueue', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasQueueV6');
  },
  Key() {
    return $injector.get('OvhApiDbaasQueueKey');
  },
  Region() {
    return $injector.get('OvhApiDbaasQueueRegion');
  },
}));
