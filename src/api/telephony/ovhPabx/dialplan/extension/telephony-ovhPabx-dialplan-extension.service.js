angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplanExtension', $injector => ({
  Rule() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionRule');
  },
  ConditionScreenList() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList');
  },
  ConditionTime() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionConditionTime');
  },
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionV6');
  },
}));
