angular.module('ovh-api-services').service('OvhApiMyIp', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiMyIpAapi');
  },
}));
