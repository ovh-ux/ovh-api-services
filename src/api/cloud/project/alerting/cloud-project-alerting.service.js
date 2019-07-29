angular.module('ovh-api-services').service('OvhApiCloudProjectAlerting', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectAlertingV6');
  },
}));
