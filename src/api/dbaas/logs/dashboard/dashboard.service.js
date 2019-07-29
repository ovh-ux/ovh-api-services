angular.module('ovh-api-services').service('OvhApiDbaasLogsDashboard', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsDashboardV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsDashboardIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsDashboardAapi');
  },
}));
