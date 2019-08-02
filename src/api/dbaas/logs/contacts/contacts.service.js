angular.module('ovh-api-services').service('OvhApiDbaasLogsContacts', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsContactsV6');
  },
}));
