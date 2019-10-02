angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxSound', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxSoundV6');
  },
}));
