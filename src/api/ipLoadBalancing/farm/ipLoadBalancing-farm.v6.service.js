import capitalize from 'lodash/capitalize';
import forEach from 'lodash/forEach';

angular.module('ovh-api-services').service('OvhApiIpLoadBalancingFarmV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiIpLoadBalancingFarmV6Query');

  const iplbFarm = $resource('/ipLoadbalancing/:serviceName/definedFarms', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
  });

  iplbFarm.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return iplbFarm;
});

forEach(['tcp', 'udp', 'http'], (type) => {
  const farmType = capitalize(type);
  angular
    .module('ovh-api-services')
    .service(`OvhApiIpLoadBalancingFarm${farmType}V6`,
      ['$resource', '$cacheFactory', function ($resource, $cacheFactory) {
        const cache = $cacheFactory(`OvhApiIpLoadBalancingFarm${farmType}V6`);
        const queryCache = $cacheFactory(`OvhApiIpLoadBalancingFarm${farmType}V6Query`);

        const interceptor = {
          response(response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
          },
        };

        const iplbFarm = $resource(`/ipLoadbalancing/:serviceName/${type}/farm/:farmId`, {
          serviceName: '@serviceName',
          farmId: '@farmId',
        }, {
          query: { method: 'GET', isArray: true, cache: queryCache },
          get: { method: 'GET', cache },
          post: { method: 'POST', interceptor },
          put: { method: 'PUT', interceptor },
          delete: { method: 'DELETE', interceptor },
        });

        iplbFarm.resetCache = function () {
          cache.removeAll();
        };

        iplbFarm.resetQueryCache = function () {
          queryCache.removeAll();
        };

        return iplbFarm;
      }]);
});
