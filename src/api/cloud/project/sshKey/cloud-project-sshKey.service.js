angular.module('ovh-api-services').service('OvhApiCloudProjectSshKey', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectSshKeyV6');
  },
}));
