angular.module('ovh-api-services').service('OvhApiMeFax', ($injector) => ({
  CustomDomains() {
    return $injector.get('OvhApiMeFaxCustomDomains');
  },
}));
