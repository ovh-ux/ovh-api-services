angular.module('ovh-api-services').service('OvhApiDomainRulesEmailsObfuscation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDomainRulesEmailsObfuscationV6');
  },
}));
