angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterBackupV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedCloudDatacenterBackupV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response.data;
    },
  };

  const baseUrl = '/dedicatedCloud/:serviceName/datacenter/:datacenterId/backup';

  const backupResource = $resource(baseUrl, {
    serviceName: '@serviceName',
    datacenterId: '@datacenterId',
  }, {
    get: { method: 'GET', cache },
    disable: {
      url: `${baseUrl}/disable`,
      method: 'POST',
      interceptor,
    },
    enable: {
      url: `${baseUrl}/enable`,
      method: 'POST',
      interceptor,
    },
    changeProperties: {
      url: `${baseUrl}/changeProperties`,
      method: 'POST',
      interceptor,
    },
  });

  backupResource.resetAllCache = function () {
    backupResource.resetCache();
  };

  backupResource.resetCache = function () {
    cache.removeAll();
  };

  return backupResource;
});
