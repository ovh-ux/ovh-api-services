angular.module('ovh-api-services').service('OvhApiCdnDedicatedV6', ($resource, $q, OvhApiCdnDedicated) => $resource('/cdn/dedicated/:serviceName', {
  serviceName: '@serviceName',
}, {
  get: {
    method: 'GET',
    cache: OvhApiCdnDedicated.cache,
  },
  query: {
    method: 'GET',
    isArray: true,
    cache: OvhApiCdnDedicated.cache,
  },
  quota: {
    method: 'GET',
    url: '/cdn/dedicated/:serviceName/quota',
    isArray: true,
  },
  logs: {
    method: 'POST',
    url: '/cdn/dedicated/:serviceName/logs',
  },
  swsGetStatistics: {
    method: 'GET',
    url: '/sws/dedicated/cdn/:serviceName/statistics',
    serviceType: 'aapi',
    isArray: false,
  },
  swsGetAllBackends: {
    method: 'GET',
    url: '/sws/dedicated/cdn/:serviceName/backends',
    serviceType: 'aapi',
    isArray: false,
  },
}));
