angular.module('ovh-api-services').service('OvhApiLicenseOfficeUsers', ($injector) => ({
  v6() {
    return $injector.get('OvhApiLicenseOfficeUsersV6');
  },
}));
