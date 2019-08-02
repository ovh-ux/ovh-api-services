angular.module('ovh-api-services').service('OvhApiCdnWebstorageV6', ($resource, $q, OvhApiCdnWebstorage) => $resource('/cdn/webstorage/:serviceName', {
  serviceName: '@serviceName',
}, {
  get: {
    method: 'GET',
    cache: OvhApiCdnWebstorage.cache,
  },
  query: {
    method: 'GET',
    isArray: true,
    cache: OvhApiCdnWebstorage.cache,
  },
}));
