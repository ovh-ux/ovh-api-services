angular.module('ovh-api-services').service('OvhApiSmsUsersIncoming', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsUsersIncomingV6');
  },
}));
