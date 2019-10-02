angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudLocationV6');
  },
  Stock() {
    return $injector.get('OvhApiDedicatedCloudLocationStock');
  },
  Hypervisor() {
    return $injector.get('OvhApiDedicatedCloudLocationHypervisor');
  },
  HostProfile() {
    return $injector.get('OvhApiDedicatedCloudLocationHostProfile');
  },
}));
