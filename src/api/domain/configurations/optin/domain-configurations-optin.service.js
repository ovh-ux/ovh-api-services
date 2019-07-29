angular.module('ovh-api-services').service('OvhApiDomainConfigurationsOptin', $injector => ({
  v6() {
    return $injector.get('OvhApiDomainConfigurationsOptinV6');
  },
}));
