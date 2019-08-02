angular.module('ovh-api-services').service('OvhApiCloudProjectBill', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectBillV6');
  },
}));
