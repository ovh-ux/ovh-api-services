angular.module('ovh-api-services').service('OvhApiDedicatedServerNic', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerNicV6');
  },
}));
