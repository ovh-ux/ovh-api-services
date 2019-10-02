angular.module('ovh-api-services').service('OvhApiDbaasLogsCluster', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsClusterV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsClusterIceberg');
  },
}));
