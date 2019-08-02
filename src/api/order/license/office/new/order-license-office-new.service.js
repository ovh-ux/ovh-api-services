angular.module('ovh-api-services').service('OvhApiOrderLicenseOfficeNew', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderLicenseOfficeNewV6');
  },
}));
