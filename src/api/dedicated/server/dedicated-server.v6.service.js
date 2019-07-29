angular.module('ovh-api-services').service('OvhApiDedicatedServerV6', ($resource, $cacheFactory) => {
  const otherCache = $cacheFactory('OvhApiDedicatedServerV6');
  const queryCache = $cacheFactory('OvhApiDedicatedServerV6Query');

  const dedicatedServerResource = $resource('/dedicated/server/:serverName', {
    serverName: '@serverName',
  }, {
    get: { method: 'GET', cache: otherCache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    getHardware: {
      url: '/dedicated/server/:serverName/specifications/hardware',
      method: 'GET',
      cache: otherCache,
    },
    getNetwork: {
      url: '/dedicated/server/:serverName/specifications/network',
      method: 'GET',
      cache: otherCache,
    },
    getBootInfo: {
      url: '/dedicated/server/:serverName/boot/:bootId',
      method: 'GET',
      bootId: '@bootId',
      cache: otherCache,
    },
    getServiceInfos: {
      url: '/dedicated/server/:serverName/serviceInfos',
      method: 'GET',
      cache: otherCache,
    },
    getMrtg: {
      url: '/dedicated/server/:serverName/mrtg',
      method: 'GET',
      period: '@period',
      type: '@type',
      cache: otherCache,
      isArray: true,
    },
    getStatisticsChart: {
      url: '/dedicated/server/:serverName/statistics/chart',
      method: 'GET',
      period: '@period',
      type: '@type',
      cache: otherCache,
    },
    askHardDiskDriveReplacement: {
      url: '/dedicated/server/:serverName/support/replace/hardDiskDrive',
      method: 'POST',
    },
    schema: {
      method: 'GET',
      url: '/dedicated/server.json',
      cache: otherCache,
    },
  });

  dedicatedServerResource.resetAllCache = function () {
    dedicatedServerResource.resetOtherCache();
    dedicatedServerResource.resetQueryCache();
  };

  dedicatedServerResource.resetOtherCache = function () {
    otherCache.removeAll();
  };

  dedicatedServerResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return dedicatedServerResource;
});
