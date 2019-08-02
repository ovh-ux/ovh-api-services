import capitalize from 'lodash/capitalize';
import forEach from 'lodash/forEach';

forEach(['tcp', 'udp', 'http'], (type) => {
  const serverType = capitalize(type);
  angular
    .module('ovh-api-services')
    .service(`OvhApiIpLoadBalancingFarm${serverType}ServerV6`,
      ['$resource', '$cacheFactory', function ($resource, $cacheFactory) {
        const cache = $cacheFactory(`OvhApiIpLoadBalancingFarm${serverType}ServerV6`);
        const queryCache = $cacheFactory(`OvhApiIpLoadBalancingFarm${serverType}ServerV6Query`);

        const interceptor = {
          response(response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
          },
        };

        const iplbFarm = $resource(`/ipLoadbalancing/:serviceName/${type}/farm/:farmId/server/:serverId`, {
          serviceName: '@serviceName',
          farmId: '@farmId',
          serverId: '@serverId',
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
