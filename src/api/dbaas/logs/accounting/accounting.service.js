angular.module('ovh-api-services').service('OvhApiDbaasLogsAccounting', $injector => ({
  Aapi() {
    return $injector.get('OvhApiDbaasLogsAccountingAapi');
  },
}));
