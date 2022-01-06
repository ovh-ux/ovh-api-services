angular.module('ovh-api-services').service('OvhApiTelephonyVoicemailDirectories', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyVoicemailDirectoriesV6');
  },
}));
