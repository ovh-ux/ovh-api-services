angular.module('ovh-api-services').service('OvhApiMeDepositRequest', $injector => ({
  v6() {
    return $injector.get('OvhApiMeDepositRequestV6');
  },
}));
