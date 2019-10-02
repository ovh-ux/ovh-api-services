angular.module('ovh-api-services').service('OvhApiXdslTasksCurrent', ($injector) => ({
  v6: angular.noop,
  Aapi() {
    return $injector.get('OvhApiXdslTasksCurrentAapi');
  },
}));
