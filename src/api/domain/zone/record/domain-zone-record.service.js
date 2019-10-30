angular.module('ovh-api-services').service('OvhApiDomainZoneRecord', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDomainZoneRecordV6');
  },
}));
