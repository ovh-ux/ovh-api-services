angular.module('ovh-api-services').service('OvhApiDedicatedCloudIpDetails', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudIpDetailsV6');
  },
}));
