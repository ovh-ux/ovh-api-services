angular.module('ovh-api-services').service('OvhApiCloudPCAV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudPCAv6Query');
  const cache = $cacheFactory('OvhApiCloudPCAV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const cloudPCA = $resource('/cloud/:serviceName/pca/:pcaServiceName', {
    serviceName: '@serviceName',
    pcaServiceName: '@pcaServiceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache,
    },
    transferState: {
      url: '/cloud/:serviceName/pca/:pcaServiceName/transferState',
      method: 'GET',
      cache,
    },
    transfer: {
      url: '/cloud/:serviceName/pca/:pcaServiceName/transfer',
      method: 'POST',
      interceptor,
    },
    download: {
      url: '/cloud/:serviceName/pca/:pcaServiceName/download',
      method: 'POST',
      interceptor,
    },
    deleteData: {
      url: '/cloud/:serviceName/pca/:pcaServiceName/deleteData',
      method: 'POST',
      interceptor,
    },
  });

  cloudPCA.resetAllCache = function () {
    cloudPCA.resetCache();
    cloudPCA.resetQueryCache();
  };

  cloudPCA.resetCache = function () {
    cache.removeAll();
  };

  cloudPCA.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return cloudPCA;
});
