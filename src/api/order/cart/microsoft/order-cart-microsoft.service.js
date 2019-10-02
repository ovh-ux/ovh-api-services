angular.module('ovh-api-services').service('OvhApiOrderCartMicrosoft', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartMicrosoftV6');
  },
}));
