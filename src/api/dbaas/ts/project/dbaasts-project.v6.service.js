angular.module('ovh-api-services').service('OvhApiDBaasTsProjectV6', ($resource, $q, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDBaasTsProjectV6Query');
  const cache = $cacheFactory('OvhApiDBaasTsProjectV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const projectResource = $resource('/dbaas/timeseries/:serviceName', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
    setup: { method: 'POST', url: '/dbaas/timeseries/:serviceName/setup', interceptor },
  });

  projectResource.queryDetails = function () {
    const queue = [];
    return projectResource.query().$promise.then((serviceNames) => {
      angular.forEach(serviceNames, (serviceName) => {
        queue.push(
          projectResource.get({
            serviceName,
          }).$promise,
        );
      });
      return $q.allSettled(queue).then(projects => projects, (maybeProjects) => {
        const projects = [];
        for (let i = maybeProjects.length - 1; i >= 0; i -= 1) {
          const maybeProject = maybeProjects[i];
          if (maybeProject.serviceName) {
            projects.push(maybeProject);
          }
        }
        return projects;
      });
    });
  };

  projectResource.resetAllCache = function () {
    projectResource.resetCache();
    projectResource.resetQueryCache();
  };

  projectResource.resetCache = function () {
    cache.removeAll();
  };

  projectResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return projectResource;
});
