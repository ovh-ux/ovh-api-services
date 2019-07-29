angular.module('ovh-api-services').service('OvhApiDedicatedCloudVMEncryptionKmsV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudVMEncryptionKmsV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudVMEncryptionKmsV6');
  const interceptor = function (response) {
    cache.remove(response.config.url);
    queryCache.removeAll();
    return response;
  };

  const kmsResource = $resource('/dedicatedCloud/:serviceName/vmEncryption/kms/:kmsId', {
    serviceName: '@serviceName',
    kmsId: '@kmsId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    create: {
      method: 'POST',
      url: '/dedicatedCloud/:serviceName/vmEncryption/kms',
      params: {
        ip: '@ip',
        description: '@description',
        sslThumbprint: '@sslThumbprint',
      },
      interceptor,
    },
    changeProperties: {
      method: 'POST',
      url: '/dedicatedCloud/:serviceName/vmEncryption/kms/:kmsId/changeProperties',
      params: {
        description: '@description',
        sslThumbprint: '@sslThumbprint',
      },
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  kmsResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  kmsResource.resetCache = function () {
    cache.removeAll();
  };

  return kmsResource;
});
