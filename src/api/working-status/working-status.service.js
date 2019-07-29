angular.module('ovh-api-services').service('OvhApiWorkingStatus', $injector => ({
  Aapi() {
    return $injector.get('OvhApiWorkingStatusAapi');
  },
}));
