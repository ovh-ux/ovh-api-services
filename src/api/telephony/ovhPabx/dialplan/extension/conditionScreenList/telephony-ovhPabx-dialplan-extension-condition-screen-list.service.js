angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListV6');
  },
}));
