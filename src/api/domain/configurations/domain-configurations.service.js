angular.module('ovh-api-services').service('OvhApiDomainConfigurations', $injector => ({
  ObfuscatedEmails() {
    return $injector.get('OvhApiDomainConfigurationsObfuscatedEmails');
  },
  Optin() {
    return $injector.get('OvhApiDomainConfigurationsOptin');
  },
}));
