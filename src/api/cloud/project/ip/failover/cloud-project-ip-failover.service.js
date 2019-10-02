angular.module('ovh-api-services').service('OvhApiCloudProjectIpFailover', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectIpFailoverV6');
  },
}));
