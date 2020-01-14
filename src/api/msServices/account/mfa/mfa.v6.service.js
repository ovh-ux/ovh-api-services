angular.module('ovh-api-services')
  .service('OvhApiMsServicesAccountMfaV6', ($resource) => $resource(
    '/msServices/:serviceName/account/:userPrincipalName/mfa',
    {
      serviceName: '@serviceName',
      userPrincipalName: '@userPrincipalName',
    }, {
      get: { method: 'GET' },
      create: { method: 'POST' },
      delete: { method: 'DELETE' },
      disable: {
        method: 'POST',
        url: '/msServices/:serviceName/account/:userPrincipalName/mfa/disable',
      },
      enable: {
        method: 'POST',
        url: '/msServices/:serviceName/account/:userPrincipalName/mfa/enable',
      },
      reset: {
        method: 'POST',
        url: '/msServices/:serviceName/account/:userPrincipalName/mfa/reset',
      },
    },
  ));
