angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxMenuEntry', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxMenuEntryV6');
  },
}));
