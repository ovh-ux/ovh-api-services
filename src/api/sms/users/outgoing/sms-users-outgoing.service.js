angular.module('ovh-api-services').service('OvhApiSmsUsersOutgoing', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsUsersOutgoingV6');
  },
}));
