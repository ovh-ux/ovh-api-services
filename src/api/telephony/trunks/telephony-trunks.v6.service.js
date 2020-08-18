angular.module('ovh-api-services').service('OvhApiTelephonyTrunksV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyTrunksV6');
  const queryCache = $cacheFactory('OvhApiTelephonyTrunksV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/trunks/:serviceName', {
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    getServiceInfos: {
      method: 'GET',
      url: '/telephony/trunks/:serviceName/serviceInfos',
      cache,
    },
    setServiceInfos: {
      method: 'PUT',
      url: '/telephony/trunks/:serviceName/serviceInfos',
      interceptor,
    },
    changeContact: {
      method: 'POST',
      url: '/telephony/trunks/:serviceName/changeContact',
      interceptor,
    },
  });

  res.resetCache = function () {
    cache.removeAll();
  };

  res.resetQueryCache = function () {
    queryCache.removeAll();
  };

  res.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return res;
});
