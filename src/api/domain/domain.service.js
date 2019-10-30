angular.module('ovh-api-services').service('OvhApiDomain', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDomainV6');
  },
  v7() {
    return $injector.get('OvhApiDomainV7');
  },
  Configurations() {
    return $injector.get('OvhApiDomainConfigurations');
  },
  Options() {
    return $injector.get('OvhApiDomainOptions');
  },
  Rules() {
    return $injector.get('OvhApiDomainRules');
  },
  Zone() {
    return $injector.get('OvhApiDomainZone');
  },
}));
