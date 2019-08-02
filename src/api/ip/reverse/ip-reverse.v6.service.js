angular.module('ovh-api-services').service('OvhApiIpReverseV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpReverseV6');
  const queryCache = $cacheFactory('OvhApiIpReverseV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ipReverse = $resource('/ip/:ip/reverse/:ipReverse', {
    ip: '@ip',
    ipReverse: '@ipReverse',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache,
    },
    create: {
      method: 'POST',
      url: '/ip/:ip/reverse',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  /**
     * Get reverse DNS of a given IP.
     *
     * (ipBlock parameter if optional and only used if ip != ipBLock)
     * Example :
     *  ip      : 51.254.180.16
     *  ipBlock : 51.254.180.18/30
     */
  ipReverse.getReverseDns = function (ip, ipBlock) {
    return ipReverse.query({
      ip: ipBlock || ip,
    }).$promise.then((ips) => {
      if (~ips.indexOf(ip)) {
        return ipReverse.get({
          ip: ipBlock || ip,
          ipReverse: ip,
        }).$promise.then(rev => rev.reverse);
      }

      return null;
    });
  };

  ipReverse.resetAllCache = function () {
    ipReverse.resetCache();
    ipReverse.resetQueryCache();
  };

  ipReverse.resetCache = function () {
    cache.removeAll();
  };

  ipReverse.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ipReverse;
});
