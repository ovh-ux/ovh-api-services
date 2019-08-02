angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplanExtensionConditionTime', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeV6');
  },
}));
