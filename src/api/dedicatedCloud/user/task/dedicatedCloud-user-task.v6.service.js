angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserTaskV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudUserTaskV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudUserTaskV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const baseURL = '/dedicatedCloud/:serviceName/user/:userId/task/:taskId';

  const taskResource = $resource(baseURL, {
    serviceName: '@serviceName',
    userId: '@userId',
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
