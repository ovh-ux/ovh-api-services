angular.module('ovh-api-services').service('OvhApiHostingWebV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiHostingWebV6');

  return $resource('/hosting/web/:serviceName', {
    serviceName: '@serviceName',
  }, {
    getAttachedDomain: {
      url: '/hosting/web/attachedDomain',
      method: 'GET',
      params: { domain: '@domain' },
      cache,
      isArray: true,
    },
  });
});
