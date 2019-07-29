angular.module('ovh-api-services').service('OvhApiOrderLicenseOffice', $injector => ({
  v6: angular.noop,
  New() {
    return $injector.get('OvhApiOrderLicenseOfficeNew');
  },
}));
