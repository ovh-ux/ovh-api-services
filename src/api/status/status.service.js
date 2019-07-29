angular.module('ovh-api-services').service('OvhApiStatus', $injector => ({
  v6() {
    return $injector.get('OvhApiStatusV6');
  },
  Task() {
    return $injector.get('OvhApiStatusTask');
  },
}));
