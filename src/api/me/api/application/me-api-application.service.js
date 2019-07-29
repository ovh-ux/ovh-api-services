angular.module('ovh-api-services').service('OvhApiMeApiApplication', $injector => ({
  v6() {
    return $injector.get('OvhApiMeApiApplicationV6');
  },
}));
