angular.module('ovh-api-services')
  .service('OvhApiEmailExchangeServiceServerV6', ($resource) => $resource(
    '/email/exchange/:organizationName/service/:exchangeService/server',
    {
      organizationName: '@organizationName',
      exchangeService: '@exchangeService',
    },
    {
      get: { method: 'GET' },
      update: { method: 'PUT' },
    },
  ));
