angular.module('ovh-api-services').service('OvhApiDedicatedCloudTaskV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudTaskV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudTaskV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const baseURL = '/dedicatedCloud/:serviceName/task/:taskId';

  const taskResource = $resource(baseURL, {
    serviceName: '@serviceName',
    taskId: '@taskId',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
      params: {
        name: '@name',
        state: '@state',
      },
    },
    changeMaintenanceExecutionDate: {
      url: `${baseURL}/changeMaintenanceExecutionDate`,
      method: 'POST',
      interceptor,
    },
    resetTaskState: {
      url: `${baseURL}/resetTaskState`,
      method: 'POST',
      interceptor,
    },
  });

  taskResource.resetCache = function () {
    cache.removeAll();
  };

  taskResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return taskResource;
});
