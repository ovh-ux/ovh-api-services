angular.module('ovh-api-services').service('OvhApiVeeam', $injector => ({
  v6() {
    return $injector.get('OvhApiVeeamV6');
  },
}));
