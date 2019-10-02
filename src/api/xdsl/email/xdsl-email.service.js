angular.module('ovh-api-services').service('OvhApiXdslEmail', ($injector) => ({
  Pro() {
    return $injector.get('OvhApiXdslEmailPro');
  },
}));
