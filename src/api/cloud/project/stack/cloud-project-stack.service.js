angular.module('ovh-api-services').service('OvhApiCloudProjectStack', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectStackV6');
  },
}));
