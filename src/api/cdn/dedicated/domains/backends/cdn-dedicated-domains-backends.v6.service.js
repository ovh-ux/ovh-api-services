angular.module('ovh-api-services').service('OvhApiCdnDedicatedDomainsBackendsV6', $resource => $resource('/cdn/dedicated/:serviceName/domains/:domain/backends/:ip', {
  serviceName: '@serviceName',
  domain: '@domain',
  ip: '@ip',
}, {
  add: {
    method: 'POST',
    url: '/cdn/dedicated/:serviceName/domains/:domain/backends',
    params: {
      ip: '@ip',
    },
  },
}));
