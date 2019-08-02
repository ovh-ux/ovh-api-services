angular.module('ovh-api-services').service('OvhApiMeSshKey', $injector => ({
  v6() {
    return $injector.get('OvhApiMeSshKeyV6');
  },
}));
