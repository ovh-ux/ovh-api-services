angular.module('ovh-api-services').service('OvhApiMeTaskContactChange', $injector => ({
  v6() {
    return $injector.get('OvhApiMeTaskContactChangeV6');
  },
}));
