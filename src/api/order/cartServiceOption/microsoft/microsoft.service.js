angular.module('ovh-api-services').service('OvhApiOrderCartServiceOptionMicrosoft', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartServiceOptionMicrosoftV6');
  },
}));
