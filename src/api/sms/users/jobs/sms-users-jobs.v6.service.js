angular.module('ovh-api-services').service('OvhApiSmsUsersJobsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsUserJobsV6');
  const queryCache = $cacheFactory('OvhApiSmsUserJobsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const usersJobs = $resource('/sms/:serviceName/users/:login/jobs/:id', {
    serviceName: '@serviceName',
    login: '@login',
    id: '@id',
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
    send: {
      method: 'POST',
      isArray: false,
      interceptor,
    },
  });

  usersJobs.resetCache = function () {
    cache.removeAll();
  };

  usersJobs.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return usersJobs;
});
