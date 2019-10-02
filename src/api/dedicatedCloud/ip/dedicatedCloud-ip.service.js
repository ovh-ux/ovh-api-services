angular.module('ovh-api-services').service('OvhApiDedicatedCloudIp', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudIpV6');
  },
  Details() {
    return $injector.get('OvhApiDedicatedCloudIpDetails');
  },
}));
