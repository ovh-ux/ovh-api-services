angular.module('ovh-api-services').service('OvhApiVrackCloudProjectV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVrackCloudProjectV6');
  const queryCache = $cacheFactory('OvhApiVrackCloudProjectV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const vrackCloudProject = $resource('/vrack/:serviceName/cloudProject/:project', {}, {
    query: {
      method: 'GET', params: { serviceName: '@serviceName', project: '@project' }, isArray: true, cache: queryCache,
    },
    get: { method: 'GET', params: { serviceName: '@serviceName', project: '@project' }, cache },
    edit: { method: 'PUT', params: { serviceName: '@serviceName', project: '@project' }, interceptor },
    delete: { method: 'DELETE', params: { serviceName: '@serviceName', project: '@project' }, interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/cloudProject',
      params: { serviceName: '@serviceName' },
      interceptor,
    },
  });

  vrackCloudProject.resetCache = function () {
    cache.removeAll();
  };

  vrackCloudProject.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vrackCloudProject;
});
