angular.module('ovh-api-services').service('OvhApiTelephonyAliases', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyAliasesV6');
  },
}));
