angular.module('ovh-api-services').service('OvhApiVeeamEnterpriseV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVeeamEnterpriseV6');
  const queryCache = $cacheFactory('OvhApiVeeamEnterpriseV6Query');
  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.data;
    },
  };

  const resource = $resource('/veeam/veeamEnterprise/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    getServiceInfos: {
      url: '/veeam/veeamEnterprise/:serviceName/serviceInfos',
      method: 'GET',
      cache,
    },
    register: {
      url: '/veeam/veeamEnterprise/:serviceName/register',
      method: 'POST',
      interceptor,
    },
    update: {
      url: '/veeam/veeamEnterprise/:serviceName/update',
      method: 'POST',
      interceptor,
    },
    terminate: {
      url: '/veeam/veeamEnterprise/:serviceName/terminate',
      method: 'POST',
      interceptor,
    },
    confirmTermination: {
      url: '/veeam/veeamEnterprise/:serviceName/confirmTermination',
      method: 'POST',
      interceptor,
    },
    tasks: {
      url: '/veeam/veeamEnterprise/:serviceName/task',
      method: 'GET',
      isArray: true,
    },
    task: {
      url: '/veeam/veeamEnterprise/:serviceName/task/:taskId',
      method: 'GET',
      params: {
        taskId: '@taskId',
      },
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
