angular.module('ovh-api-services').service('OvhApiDedicatedCloudOptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedCloudOptionV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response.data;
    },
  };

  const baseURL = '/dedicatedCloud/:serviceName/:option';

  const optionResource = $resource(baseURL, {
    serviceName: '@serviceName',
    option: '@option',
  }, {
    get: { method: 'GET', cache },
    canBeDisabled: {
      url: `${baseURL}/canBeDisabled`,
      method: 'GET',
      cache,
    },
    canBeEnabled: {
      url: `${baseURL}/canBeEnabled`,
      method: 'GET',
      cache,
    },
    disable: {
      url: `${baseURL}/disable`,
      method: 'POST',
      interceptor,
    },
    enable: {
      url: `${baseURL}/enable`,
      method: 'POST',
      interceptor,
    },
  });

  optionResource.resetCache = function () {
    cache.removeAll();
  };

  return optionResource;
});
