angular.module('ovh-api-services').service('OvhApiCloudPriceV6', ($resource, $cacheFactory) => {
  // This file is deprecated
  const cache = $cacheFactory('OvhApiCloudPriceV6');

  return $resource('/cloud/price', {
    flavorId: '@flavorId',
    region: '@region',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache, isArray: false },
  });
});
