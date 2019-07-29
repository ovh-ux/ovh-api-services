angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterDisasterRecoveryZertoV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedCloudDatacenterDisasterRecoveryZertoV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response.data;
    },
  };

  const baseUrl = '/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto';

  const zertoResource = $resource(baseUrl, {
    serviceName: '@serviceName',
    datacenterId: '@datacenterId',
  }, {
    // Method is a POST but acts like a GET
    get: {
      url: `${baseUrl}/state`,
      method: 'POST',
      cache,
      hasBody: false,
    },
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
    generateZsspPassword: {
      url: `${baseUrl}/generateZsspPassword`,
      method: 'POST',
      interceptor,
    },
  });

  zertoResource.resetAllCache = function () {
    zertoResource.resetCache();
  };

  zertoResource.resetCache = function () {
    cache.removeAll();
  };

  return zertoResource;
});
