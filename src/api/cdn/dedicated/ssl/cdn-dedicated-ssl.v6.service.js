angular.module('ovh-api-services').service('OvhApiCdnDedicatedSslV6', ($resource) => $resource('/cdn/dedicated/:serviceName/ssl', {
  serviceName: '@serviceName',
}, {
  update: {
    method: 'POST',
    url: '/cdn/dedicated/:serviceName/ssl/update',
  },
}));
