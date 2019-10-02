angular.module('ovh-api-services').service('OvhApiOrderOverTheBox', ($injector) => ({
  v6: angular.noop,
  New() {
    return $injector.get('OvhApiOrderOverTheBoxNew');
  },
}));
