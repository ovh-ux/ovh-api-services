angular.module('ovh-api-services').service('OvhApiHostingPrivateDatabaseWhitelist', $injector => ({
  v6() {
    return $injector.get('OvhApiHostingPrivateDatabaseWhitelistV6');
  },
}));
