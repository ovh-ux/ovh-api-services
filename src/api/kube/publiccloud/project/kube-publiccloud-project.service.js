angular.module('ovh-api-services').service('OvhApiKubePublicCloudProject', ($injector) => ({
  v6() {
    return $injector.get('OvhApiKubePublicCloudProjectV6');
  },
}));
