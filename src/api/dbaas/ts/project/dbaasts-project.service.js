angular.module('ovh-api-services').service('OvhApiDBaasTsProject', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDBaasTsProjectV6');
  },
  Key() {
    return $injector.get('OvhApiDBaasTsProjectKey');
  },
  Quota() {
    return $injector.get('OvhApiDBaasTsProjectQuota');
  },
  Billing() {
    return $injector.get('OvhApiDBaasTsProjectBilling');
  },
}));
