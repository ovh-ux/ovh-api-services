angular.module('ovh-api-services').service('OvhApiDedicatedCloudFiler', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudFilerV6');
  },
}));
