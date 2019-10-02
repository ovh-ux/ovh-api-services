angular.module('ovh-api-services').service('OvhApiDomainConfigurationsObfuscatedEmails', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDomainConfigurationsObfuscatedEmailsV6');
  },
}));
