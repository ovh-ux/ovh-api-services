angular.module('ovh-api-services').service('OvhApiNewAccountCreationRulesV6', ($resource, OvhApiNewAccountCreationRules) => $resource('/newAccount/creationRules', {
  country: '@country',
  legalform: '@legalform',
  ovhCompany: '@ovhCompany',
  ovhSubsidiary: '@ovhSubsidiary',
}, {
  get: {
    method: 'GET',
    cache: OvhApiNewAccountCreationRules.cache,
  },
}));
