angular.module('ovh-api-services').service('OvhApiOrderPrivateDatabase', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderPrivateDatabaseV6');
  },
}));
