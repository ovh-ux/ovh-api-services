angular.module('ovh-api-services').service('OvhApiLicense', ($injector) => ({
  Office() {
    return $injector.get('OvhApiLicenseOffice');
  },
  Aapi() {
    return $injector.get('OvhApiLicenseAapi');
  },
}));
