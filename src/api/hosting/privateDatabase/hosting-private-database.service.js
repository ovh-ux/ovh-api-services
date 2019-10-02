angular.module('ovh-api-services').service('OvhApiHostingPrivateDatabase', ($injector) => ({
  v6() {
    return $injector.get('OvhApiHostingPrivateDatabaseV6');
  },
  Whitelist() {
    return $injector.get('OvhApiHostingPrivateDatabaseWhitelist');
  },
}));
