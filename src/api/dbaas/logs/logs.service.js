angular.module('ovh-api-services').service('OvhApiDbaasLogs', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsAapi');
  },
  Accounting() {
    return $injector.get('OvhApiDbaasLogsAccounting');
  },
  Cluster() {
    return $injector.get('OvhApiDbaasLogsCluster');
  },
  Contacts() {
    return $injector.get('OvhApiDbaasLogsContacts');
  },
  Details() {
    return $injector.get('OvhApiDbaasLogsDetails');
  },
  Stream() {
    return $injector.get('OvhApiDbaasLogsStream');
  },
  Offer() {
    return $injector.get('OvhApiDbaasLogsOffer');
  },
  Operation() {
    return $injector.get('OvhApiDbaasLogsOperation');
  },
  Alert() {
    return $injector.get('OvhApiDbaasLogsAlert');
  },
  Index() {
    return $injector.get('OvhApiDbaasLogsIndex');
  },
  Alias() {
    return $injector.get('OvhApiDbaasLogsAlias');
  },
  Archive() {
    return $injector.get('OvhApiDbaasLogsArchive');
  },
  Role() {
    return $injector.get('OvhApiDbaasLogsRole');
  },
  Input() {
    return $injector.get('OvhApiDbaasLogsInput');
  },
  Token() {
    return $injector.get('OvhApiDbaasLogsTokens');
  },
  Dashboard() {
    return $injector.get('OvhApiDbaasLogsDashboard');
  },
  Output() {
    return $injector.get('OvhApiDbaasLogsOutput');
  },
  User() {
    return $injector.get('OvhApiDbaasLogsUser');
  },
  Option() {
    return $injector.get('OvhApiDbaasLogsOption');
  },
}));
