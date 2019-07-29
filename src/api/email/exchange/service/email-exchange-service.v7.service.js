angular.module('ovh-api-services').service('OvhApiEmailExchangeServiceV7', (apiv7) => {
  const exchangeEndpoint = apiv7('/email/exchange/:organizationName/service', {
    organizationName: '@organizationName',
  });

  return exchangeEndpoint;
});
