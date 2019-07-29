angular.module('ovh-api-services').service('OvhApiCdnDedicatedDomainsCacheRules', $injector => ({
  v6() {
    return $injector.get('OvhApiCdnDedicatedDomainsCacheRulesV6');
  },
}));
