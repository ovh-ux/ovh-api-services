angular.module('ovh-api-services').service('OvhApiVrackCloudProject', $injector => ({
  v6() {
    return $injector.get('OvhApiVrackCloudProjectV6');
  },
}));
