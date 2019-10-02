angular.module('ovh-api-services').service('OvhApiOrderOverTheBoxNew', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderOverTheBoxNewV6');
  },
}));
