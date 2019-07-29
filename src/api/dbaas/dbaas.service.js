angular.module('ovh-api-services').service('OvhApiDbaas', $injector => ({
  Queue() {
    return $injector.get('OvhApiDbaasQueue');
  },
  Logs() {
    return $injector.get('OvhApiDbaasLogs');
  },
  Order() {
    return $injector.get('OvhApiDbaasOrder');
  },
}));
