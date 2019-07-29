angular.module('ovh-api-services').service('OvhApiDBaasTsProjectBilling', $injector => ({
  v6() {
    return $injector.get('OvhApiDBaasTsProjectBillingV6');
  },
}));
