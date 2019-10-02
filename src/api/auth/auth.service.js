angular.module('ovh-api-services').service('OvhApiAuth', ($injector) => ({
  v6() {
    return $injector.get('OvhApiAuthV6');
  },
}));
