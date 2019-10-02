angular.module('ovh-api-services').service('OvhApiMeAgreements', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeAgreementsV6');
  },
}));
