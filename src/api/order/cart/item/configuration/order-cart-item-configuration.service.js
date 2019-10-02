angular.module('ovh-api-services').service('OvhApiOrderCartItemConfiguration', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartItemConfigurationV6');
  },
}));
