angular.module('ovh-api-services').service('OvhApiVeeamEnterprise', $injector => ({
  v6() {
    return $injector.get('OvhApiVeeamEnterpriseV6');
  },
}));
