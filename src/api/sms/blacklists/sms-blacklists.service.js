angular.module('ovh-api-services').service('OvhApiSmsBlacklists', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsBlacklistsV6');
  },
}));
