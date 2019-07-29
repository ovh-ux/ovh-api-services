angular.module('ovh-api-services').service('OvhApiDomain', $injector => ({
  v6() {
    return $injector.get('OvhApiDomainV6');
  },
  v7() {
    return $injector.get('OvhApiDomainV7');
  },
  Configurations() {
    return $injector.get('OvhApiDomainConfigurations');
  },
  Rules() {
    return $injector.get('OvhApiDomainRules');
  },
  Options() {
    return $injector.get('OvhApiDomainOptions');
  },
}));
