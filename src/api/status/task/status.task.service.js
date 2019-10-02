angular.module('ovh-api-services').service('OvhApiStatusTask', ($injector) => ({
  v6() {
    return $injector.get('OvhApiStatusTaskV6');
  },
}));
