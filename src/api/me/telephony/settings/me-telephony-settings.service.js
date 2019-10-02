angular.module('ovh-api-services').service('OvhApiMeTelephonySettings', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeTelephonySettingsV6');
  },
}));
