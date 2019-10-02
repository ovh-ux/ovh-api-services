angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserRight', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudUserRightV6');
  },
}));
