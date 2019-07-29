angular
  .module('ovh-api-services')
  .service('OvhApiEmailDomainV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiEmailDomainV6');
    const domainResource = $resource('/email/domain/:serviceName', {
      serviceName: '@serviceName',
    }, {
      get: { method: 'GET', cache },
      serviceInfos: { method: 'GET', url: '/email/domain/:serviceName/serviceInfos' },
    });

    domainResource.resetAllCache = function () {
      domainResource.resetCache();
    };

    domainResource.resetCache = function () {
      cache.removeAll();
    };

    return domainResource;
  });
