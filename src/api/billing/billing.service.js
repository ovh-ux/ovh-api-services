angular.module('ovh-api-services').service('OvhApiBilling', ($injector) => ({
  Autorenew() {
    return $injector.get('OvhApiBillingAutorenew');
  },
}));
