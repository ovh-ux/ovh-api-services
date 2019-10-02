angular.module('ovh-api-services').service('OvhApiOrderCartServiceOptionVps', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartServiceOptionVpsV6');
  },
}));
