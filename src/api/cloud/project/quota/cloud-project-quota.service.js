angular.module('ovh-api-services').service('OvhApiCloudProjectQuota', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectQuotaV6');
  },
}));
