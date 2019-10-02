angular.module('ovh-api-services').service('OvhApiMeOvhAccount', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiMeOvhAccountAapi');
  },
  v6() {
    return $injector.get('OvhApiMeOvhAccountV6');
  },
}));
