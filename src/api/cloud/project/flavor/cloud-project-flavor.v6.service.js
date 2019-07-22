import snakeCase from 'lodash/snakeCase';
import sortBy from 'lodash/sortBy';

angular.module("ovh-api-services").service("OvhApiCloudProjectFlavorV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectFlavorV6");
    var queryCache = $cacheFactory("OvhApiCloudProjectFlavorV6Query");

    var resource = $resource("/cloud/project/:serviceName/flavor/:flavorId", {
        serviceName: "@serviceName",
        flavorId: "@flavorId"
    }, {
        get: {
            method: "GET",
            cache: cache,
            transformResponse: function (flv, headers, status) {
                var flavor = flv;

                if (status === 200) {
                    flavor = angular.fromJson(flavor); // IE11
                    flavor.typeGeneric = snakeCase(flavor.type);
                    flavor.groupName = flavor.name.replace(/^win\-/, "");
                }
                return flavor;
            }
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            queryParams: {
                region: "@region"
            },
            transformResponse: function (flvs, headers, status) {
                var flavors = flvs;

                if (status === 200) {
                    flavors = angular.fromJson(flavors); // IE11

                    angular.forEach(flavors, function (flavor) {
                        flavor.typeGeneric = snakeCase(flavor.type);
                        flavor.groupName = flavor.name.replace(/^win\-/, "");
                    });

                    return sortBy(flavors, function (flavor) {
                        return /(\d+)/.test(flavor.name) ? parseInt(flavor.name.match(/(\d+)/)[0], 10) : flavor.name;
                    });
                }
                return flavors;

            }
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
