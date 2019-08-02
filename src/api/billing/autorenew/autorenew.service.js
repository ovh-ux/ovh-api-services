angular.module('ovh-api-services').service('OvhApiBillingAutorenew', $injector => ({
  Services() {
    return $injector.get('OvhApiBillingAutorenewServices');
  },
}));
