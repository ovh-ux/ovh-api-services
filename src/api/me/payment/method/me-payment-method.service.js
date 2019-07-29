angular.module('ovh-api-services').service('OvhApiMePayMethod', $injector => ({
  v6() {
    return $injector.get('OvhApiMePayMethodV6');
  },
}));
