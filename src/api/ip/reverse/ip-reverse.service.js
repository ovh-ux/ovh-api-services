angular.module('ovh-api-services').service('OvhApiIpReverse', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpReverseV6');
  },
}));
