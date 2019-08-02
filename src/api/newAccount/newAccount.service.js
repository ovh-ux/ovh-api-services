angular.module('ovh-api-services').service('OvhApiNewAccount', $injector => ({
  v6() {
    return $injector.get('OvhApiNewAccountV6');
  },
  LegalForm() {
    return $injector.get('OvhApiNewAccountLegalForm');
  },
  CreationRules() {
    return $injector.get('OvhApiNewAccountCreationRules');
  },
}));
