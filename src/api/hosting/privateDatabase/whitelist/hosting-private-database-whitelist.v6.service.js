angular.module('ovh-api-services').service('OvhApiHostingPrivateDatabaseWhitelistV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiHostingPrivateDatabaseWhitelistV6Cache');

  const interceptor = {
    response(response) {
      cache.removeAll();
      return response;
    },
  };

  const resource = $resource('/hosting/privateDatabase/:serviceName/whitelist', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache,
      params: {
        ip: '@ip',
        service: '@service',
        sftp: '@sftp',
      },
    },
    post: {
      method: 'POST',
      interceptor,
    },
    getIp: {
      method: 'GET',
      url: '/hosting/privateDatabase/:serviceName/whitelist/:ip',
      params: {
        ip: '@ip',
      },
      cache,
    },
    putIp: {
      method: 'PUT',
      url: '/hosting/privateDatabase/:serviceName/whitelist/:ip',
      params: {
        ip: '@ip',
        whitelist: '@whitelist',
      },
      interceptor,
    },
    deleteIp: {
      method: 'DELETE',
      url: '/hosting/privateDatabase/:serviceName/whitelist/:ip',
      params: {
        ip: '@ip',
      },
      interceptor,
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
