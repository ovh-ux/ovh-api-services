angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationHostProfile', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudLocationHostProfileV6');
  },
}));
