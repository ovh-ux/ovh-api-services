angular.module('ovh-api-services').service('OvhApiOrderVrack', ($injector) => ({
  v6: angular.noop,
  New() {
    return $injector.get('OvhApiOrderVrackNew');
  },
}));
