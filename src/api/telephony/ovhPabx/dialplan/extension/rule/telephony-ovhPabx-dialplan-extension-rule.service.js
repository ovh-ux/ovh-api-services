angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplanExtensionRule', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionRuleV6');
  },
}));
