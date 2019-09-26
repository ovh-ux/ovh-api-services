angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseSecurityGroupRule', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseSecurityGroupRuleV6');
  },
}));
