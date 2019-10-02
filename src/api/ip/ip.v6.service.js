
angular.module('ovh-api-services').service('OvhApiIpV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpV6');
  const queryCache = $cacheFactory('OvhApiIpV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ips = $resource('/ip/:ip', {
    ip: '@ip',
  }, {
    schema: { method: 'GET', url: '/ip.json' },
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    move: {
      method: 'POST',
      url: '/ip/:ip/move',
    },
    park: {
      method: 'POST',
      url: '/ip/:ip/park',
    },
    task: {
      method: 'GET',
      isArray: true,
      url: '/ip/:ip/task',
    },
    taskDetails: {
      method: 'GET',
      url: '/ip/:ip/task/:taskId',
      params: {
        ip: '@ip',
        taskId: '@taskId',
      },
    },
    reverse: {
      method: 'GET',
      url: '/ip/:ip/reverse/:ipReverse',
      params: {
        ip: '@ip',
        taskId: '@ipReverse',
      },
      cache,
    },
  });

  /**
    * Get a pending Task [todo|doing]
    */
  ips.getPendingTask = function (ipBlock, fct) {
    // Task en Todo ?
    return ips.task({
      ip: ipBlock,
      function: fct,
      status: 'todo',
    }).$promise.then((taskIds) => {
      if (taskIds && taskIds.length) {
        return taskIds[0];
      }

      // Task en Doing ?
      return ips.task({
        ip: ipBlock,
        function: fct,
        status: 'doing',
      }).$promise.then((taskIdsResp) => {
        if (taskIdsResp && taskIdsResp.length) {
          return taskIdsResp[0];
        }

        return null;
      });
    });
  };

  ips.resetCache = function () {
    cache.removeAll();
  };

  ips.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ips;
});
