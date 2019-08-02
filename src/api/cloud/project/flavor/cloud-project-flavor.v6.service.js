import snakeCase from 'lodash/snakeCase';
import sortBy from 'lodash/sortBy';

angular.module('ovh-api-services').service('OvhApiCloudProjectFlavorV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectFlavorV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectFlavorV6Query');

  const resource = $resource('/cloud/project/:serviceName/flavor/:flavorId', {
    serviceName: '@serviceName',
    flavorId: '@flavorId',
  }, {
    get: {
      method: 'GET',
      cache,
      transformResponse(flv, headers, status) {
        let flavor = flv;

        if (status === 200) {
          flavor = angular.fromJson(flavor); // IE11
          flavor.typeGeneric = snakeCase(flavor.type);
          flavor.groupName = flavor.name.replace(/^win-/, '');
        }
        return flavor;
      },
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
      queryParams: {
        region: '@region',
      },
      transformResponse(flvs, headers, status) {
        let flavors = flvs;

        if (status === 200) {
          flavors = angular.fromJson(flavors); // IE11

          angular.forEach(flavors, (flavor) => {
            Object.assign(
              flavor,
              {
                typeGeneric: snakeCase(flavor.type),
                groupName: flavor.name.replace(/^win-/, ''),
              },
            );
          });

          return sortBy(flavors, flavor => (/(\d+)/.test(flavor.name) ? parseInt(flavor.name.match(/(\d+)/)[0], 10) : flavor.name));
        }
        return flavors;
      },
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
