angular.module('ovh-api-services').service('OvhApiOrderCartServiceOptionEnterpriseCloudDatabases', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartServiceOptionEnterpriseCloudDatabasesV6');
  },
}));
