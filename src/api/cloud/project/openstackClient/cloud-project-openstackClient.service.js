angular.module('ovh-api-services').service('OvhApiCloudProjectOpenstackClient', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectOpenstackClientV6');
  },
}));
