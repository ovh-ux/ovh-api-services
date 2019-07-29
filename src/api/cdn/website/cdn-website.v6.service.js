angular.module('ovh-api-services').service('OvhApiCdnWebsiteV6', ($resource, $q, OvhApiCdnWebsite) => $resource('/cdn/website/:serviceName', {
  serviceName: '@serviceName',
}, {
  get: {
    method: 'GET',
    cache: OvhApiCdnWebsite.cache,
  },
  query: {
    method: 'GET',
    isArray: true,
    cache: OvhApiCdnWebsite.cache,
  },
}));
