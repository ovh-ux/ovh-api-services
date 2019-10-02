angular.module('ovh-api-services').service('OvhApiSmsUsers', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsUsersV6');
  },
  Incoming() {
    return $injector.get('OvhApiSmsUsersIncoming');
  },
  Jobs() {
    return $injector.get('OvhApiSmsUsersJobs');
  },
  Outgoing() {
    return $injector.get('OvhApiSmsUsersOutgoing');
  },
  Receivers() {
    return $injector.get('OvhApiSmsUsersReceivers');
  },
}));
