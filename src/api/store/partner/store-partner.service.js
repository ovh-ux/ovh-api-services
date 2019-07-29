angular.module('ovh-api-services').service('OvhApiStorePartner', $injector => ({
  v6() {
    return $injector.get('OvhApiStorePartnerV6');
  },
}));
