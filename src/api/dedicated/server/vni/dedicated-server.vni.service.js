angular.module('ovh-api-services').service('OvhApiDedicatedServerVni', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerVniV6');
  },
}));
