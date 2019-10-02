angular.module('ovh-api-services').service('OvhApiOrderFreefax', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderFreefaxV6');
  },
}));
