angular.module('ovh-api-services').service('OvhApiOrderVrackNew', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderVrackNewV6');
  },
}));
