angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseSecurityGroup', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseSecurityGroupV6');
  },
  Rule() {
    return $injector.get('OvhApiCloudDBEnterpriseSecurityGroupRule');
  },
}));
