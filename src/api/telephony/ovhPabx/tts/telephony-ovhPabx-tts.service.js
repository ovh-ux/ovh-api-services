angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxTts', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxTtsV6');
  },
}));
