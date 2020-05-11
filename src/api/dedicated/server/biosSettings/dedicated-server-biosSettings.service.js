angular.module('ovh-api-services').service('OvhApiDedicatedServerBiosSettings', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerBiosSettingsV6');
  },
}));
