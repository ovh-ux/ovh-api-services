angular.module('ovh-api-services').service('OvhApiCloudProjectMigrationV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectMigrationV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectMigrationV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const migration = $resource('/cloud/project/:serviceName/migration/:migrationId', {
    serviceName: '@serviceName',
    migrationId: '@migrationId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    put: { method: 'PUT', interceptor },
  });

  migration.resetCache = function () {
    cache.removeAll();
  };

  migration.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return migration;
});
