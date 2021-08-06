angular.module('ovh-api-services').service('OvhApiCloudProjectCredit', ($injector, $cacheFactory) => {
  const cache = {
    v6: {
      query: $cacheFactory('OvhApiCloudProjectCreditV6Query'),
      get: $cacheFactory('OvhApiCloudProjectCreditV6'),
    },
    aapi: {
      query: $cacheFactory('OvhApiCloudProjectCreditAapiQuery'),
    },
  };

  return {
    v6() {
      return $injector.get('OvhApiCloudProjectCreditV6');
    },
    resetCache() {
      cache.v6.query.removeAll();
      cache.v6.get.removeAll();
      cache.aapi.query.removeAll();
    },
    cache,
  };
});
