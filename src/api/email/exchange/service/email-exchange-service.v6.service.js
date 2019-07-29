angular.module('ovh-api-services').service('OvhApiEmailExchangeServiceV6', ($resource) => {
  const exchangeEndpoint = $resource('/email/exchange/:organizationName/service/:exchangeService', {
    organizationName: '@organizationName',
    exchangeService: '@exchangeService',
  });

  return exchangeEndpoint;
});
