angular.module('ovh-api-services').service('OvhApiMeDeposit', ($injector) => ({
  v7() {
    return $injector.get('OvhApiMeDepositV7');
  },
}));
