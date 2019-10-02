angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseServiceInfos', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseServiceInfosV6');
  },
}));
