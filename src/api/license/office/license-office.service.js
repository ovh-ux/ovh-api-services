angular.module('ovh-api-services').service('OvhApiLicenseOffice', $injector => ({
  v6() {
    return $injector.get('OvhApiLicenseOfficeV6');
  },
  Domain() {
    return $injector.get('OvhApiLicenseOfficeDomain');
  },
  Users() {
    return $injector.get('OvhApiLicenseOfficeUsers');
  },
  UsageStatistics() {
    return $injector.get('OvhApiLicenseOfficeUsageStatistics');
  },
}));
