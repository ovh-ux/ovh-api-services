angular.module('ovh-api-services').service('OvhApiCdnDedicatedDomainsV6', ($resource) => $resource('/cdn/dedicated/:serviceName/domains/:domain', {
  serviceName: '@serviceName',
  domain: '@domain',
}, {
  add: {
    method: 'POST',
    url: '/cdn/dedicated/:serviceName/domains',
    params: {
      domain: '@domain',
    },
  },
  flush: {
    method: 'POST',
    url: '/cdn/dedicated/:serviceName/domains/:domain/flush',
  },
  logs: {
    method: 'POST',
    url: '/cdn/dedicated/:serviceName/domains/:domain/logs',
  },
  statistics: {
    method: 'GET',
    url: '/cdn/dedicated/:serviceName/domains/:domain/statistics',
  },
  update: {
    method: 'PUT',
  },
}));
