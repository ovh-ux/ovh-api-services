angular.module('ovh-api-services').service('OvhApiOrderCloudProjectIp', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCloudProjectIpV6');
  },
}));
