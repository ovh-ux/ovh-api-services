angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingRecords', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingRecordsV6');
  },
}));
