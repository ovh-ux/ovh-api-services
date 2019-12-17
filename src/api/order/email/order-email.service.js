angular.module('ovh-api-services').service('OvhApiOrderEmail', ($injector) => ({
  Domain() {
    return $injector.get('OvhApiOrderEmailDomain');
  },
}));
