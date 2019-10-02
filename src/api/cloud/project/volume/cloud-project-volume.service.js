angular.module('ovh-api-services').service('OvhApiCloudProjectVolume', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectVolumeV6');
  },
}));
