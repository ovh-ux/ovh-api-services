angular.module('ovh-api-services').service('OvhApiDomainZone', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDomainZoneV6');
  },
  Record() {
    return $injector.get('OvhApiDomainZoneRecord');
  },
}));
