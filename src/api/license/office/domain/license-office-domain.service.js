angular.module('ovh-api-services').service('OvhApiLicenseOfficeDomain', $injector => ({
  v6() {
    return $injector.get('OvhApiLicenseOfficeDomainV6');
  },
}));
