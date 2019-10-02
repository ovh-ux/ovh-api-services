angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterFiler', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterFilerV6');
  },
}));
