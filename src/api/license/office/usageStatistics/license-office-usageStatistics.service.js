angular.module('ovh-api-services').service('OvhApiLicenseOfficeUsageStatistics', $injector => ({
  v6() {
    return $injector.get('OvhApiLicenseOfficeUsageStatisticsV6');
  },
}));
