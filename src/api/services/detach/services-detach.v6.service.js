angular
  .module('ovh-api-services')
  .service('OvhApiServicesDetachV6', ($resource) => $resource(
    '/services/:serviceId/detach/:planCode',
    {
      planCode: '@planCode',
      serviceId: '@serviceId',
    },
    {
      execute: {
        url: '/services/:serviceId/detach/:planCode/execute',
        method: 'POST',
      },
      simulate: {
        url: '/services/:serviceId/detach/:planCode/simulate',
        method: 'POST',
      },
    },
  ));
