angular.module('ovh-api-services').service('OvhApiDBaasTsProjectQuota', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDBaasTsProjectQuotaV6');
  },
}));
