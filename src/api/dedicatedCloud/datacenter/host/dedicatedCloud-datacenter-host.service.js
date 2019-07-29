angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterHost', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterHostV6');
  },
}));
