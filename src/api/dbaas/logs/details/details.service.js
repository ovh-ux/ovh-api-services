angular.module('ovh-api-services').service('OvhApiDbaasLogsDetails', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiDbaasLogsDetailsAapi');
  },
}));
