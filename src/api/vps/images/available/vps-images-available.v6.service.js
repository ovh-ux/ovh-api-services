angular.module('ovh-api-services').service('OvhApiVpsImagesAvailableV6', $resource => $resource('/vps/:serviceName/images/available', {
  serviceName: '@serviceName',
}, {
  query: { method: 'GET', isArray: true },
  get: { method: 'GET', url: '/vps/:serviceName/images/available/:id' },
}));
