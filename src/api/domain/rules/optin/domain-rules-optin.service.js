angular.module('ovh-api-services').service('OvhApiDomainRulesOptin', $injector => ({
  v6() {
    return $injector.get('OvhApiDomainRulesOptinV6');
  },
}));
