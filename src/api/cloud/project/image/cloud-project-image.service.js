angular.module('ovh-api-services').service('OvhApiCloudProjectImage', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectImageV6');
  },
}));
