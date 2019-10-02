angular.module('ovh-api-services').service('OvhApiCloudProjectUsageHistory', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectUsageHistoryV6');
  },
}));
