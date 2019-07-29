angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesAccountV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiMsServicesAccountV6');

    const resource = $resource('/msServices/:serviceName/account/:userPrincipalName', {
      serviceName: '@serviceName',
      userPrincipalName: '@userPrincipalName',
    }, {
      getExchange: {
        method: 'GET', cache, isArray: false, url: '/msServices/:serviceName/account/:userPrincipalName/exchange',
      },
    });

    resource.resetAllCache = function () {
      resource.resetCache();
    };

    resource.resetCache = function () {
      cache.removeAll();
    };

    return resource;
  });
