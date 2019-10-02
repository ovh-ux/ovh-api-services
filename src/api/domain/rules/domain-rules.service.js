angular.module('ovh-api-services').service('OvhApiDomainRules', ($injector) => ({
  EmailsObfuscation() {
    return $injector.get('OvhApiDomainRulesEmailsObfuscation');
  },
  Optin() {
    return $injector.get('OvhApiDomainRulesOptin');
  },
}));
