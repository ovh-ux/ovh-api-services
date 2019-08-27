angular.module('ovh-api-services').service('OvhApiMeAutorenew', $injector => ({
  v6() {
    return $injector.get('OvhApiMeAutorenewV6');
  },
}));
