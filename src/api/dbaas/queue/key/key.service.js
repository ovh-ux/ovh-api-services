angular.module('ovh-api-services').service('OvhApiDbaasQueueKey', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasQueueKeyV6');
  },
}));
