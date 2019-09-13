angular.module('ovh-api-services').service('OvhApiDedicatedServerVirtualInterface', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerVirtualInterfaceV6');
  },
}));
