angular.module('ovh-api-services').service('OvhApiSmsUsersReceivers', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsUsersReceiversV6');
  },
}));
