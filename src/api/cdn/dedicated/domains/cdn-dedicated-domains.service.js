angular.module('ovh-api-services').service('OvhApiCdnDedicatedDomains', $injector => ({
  v6() {
    return $injector.get('OvhApiCdnDedicatedDomainsV6');
  },
  Backends() {
    return $injector.get('OvhApiCdnDedicatedDomainsBackends');
  },
  CacheRules() {
    return $injector.get('OvhApiCdnDedicatedDomainsCacheRules');
  },
}));
