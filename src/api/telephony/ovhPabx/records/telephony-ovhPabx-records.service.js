angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxRecords', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxRecordsV6');
  },
}));
