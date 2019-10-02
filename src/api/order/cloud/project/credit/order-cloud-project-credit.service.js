angular.module('ovh-api-services').service('OvhApiOrderCloudProjectCredit', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCloudProjectCreditV6');
  },
}));
