angular.module('ovh-api-services').service('OvhApiBillingAutorenewServices', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiBillingAutorenewServicesAapi');
  },
}));
