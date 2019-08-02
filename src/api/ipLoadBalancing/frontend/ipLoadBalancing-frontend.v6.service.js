import capitalize from 'lodash/capitalize';
import forEach from 'lodash/forEach';

(function () {
  angular.module('ovh-api-services').service('OvhApiIpLoadBalancingFrontendV6', ($resource, $cacheFactory) => {
    const queryCache = $cacheFactory('OvhApiIpLoadBalancingFrontendV6Query');

    const iplbFrontend = $resource('/ipLoadbalancing/:serviceName/definedFrontends', {
      serviceName: '@serviceName',
    }, {
      query: { method: 'GET', isArray: true, cache: queryCache },
    });

    iplbFrontend.resetQueryCache = function () {
      queryCache.removeAll();
    };

    return iplbFrontend;
  });

  forEach(['tcp', 'udp', 'http'], (type) => {
    const frontendType = capitalize(type);
    angular
      .module('ovh-api-services')
      .service(`OvhApiIpLoadBalancingFrontend${frontendType}V6`,
        ['$resource', '$cacheFactory', function ($resource, $cacheFactory) {
          const cache = $cacheFactory(`OvhApiIpLoadBalancingFrontend${frontendType}V6`);
          const queryCache = $cacheFactory(`OvhApiIpLoadBalancingFrontend${frontendType}V6Query`);

          const interceptor = {
            response(response) {
              cache.remove(response.config.url);
              queryCache.removeAll();
              return response.resource;
            },
          };

          const iplbFrontend = $resource(`/ipLoadbalancing/:serviceName/${type}/frontend/:frontendId`, {
            serviceName: '@serviceName',
            frontendId: '@frontendId',
          }, {
            query: { method: 'GET', isArray: true, cache: queryCache },
            get: { method: 'GET', cache },
            post: { method: 'POST', interceptor },
            put: { method: 'PUT', interceptor },
            delete: { method: 'DELETE', interceptor },
          });

          iplbFrontend.resetCache = function () {
            cache.removeAll();
          };

          iplbFrontend.resetQueryCache = function () {
            queryCache.removeAll();
          };

          return iplbFrontend;
        }]);
  });
}());
