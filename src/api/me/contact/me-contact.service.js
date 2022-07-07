angular.module('ovh-api-services').service('OvhApiMeContact', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeContactV6');
  },
}));
