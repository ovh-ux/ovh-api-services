angular.module('ovh-api-services').service('OvhApiDedicatedCephPool', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCephPoolV6');
  },
}));
