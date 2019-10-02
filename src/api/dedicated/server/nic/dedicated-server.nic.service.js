angular.module('ovh-api-services').service('OvhApiDedicatedServerPhysicalInterface', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerPhysicalInterfaceV6');
  },
}));
