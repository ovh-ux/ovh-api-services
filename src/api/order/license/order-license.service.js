angular.module('ovh-api-services').service('OvhApiOrderLicense', $injector => ({
  Office() {
    return $injector.get('OvhApiOrderLicenseOffice');
  },
  v6: angular.noop,
}));
