import capitalize from 'lodash/capitalize';
import forEach from 'lodash/forEach';

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarmV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarmV6Query");

    var iplbFarm = $resource("/ipLoadbalancing/:serviceName/definedFarms", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

    iplbFarm.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return iplbFarm;
});

forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var farmType = capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + farmType + "V6",
                 ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                     var cache = $cacheFactory("OvhApiIpLoadBalancingFarm" + farmType + "V6");
                     var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarm" + farmType + "V6Query");

                     var interceptor = {
                         response: function (response) {
                             cache.remove(response.config.url);
                             queryCache.removeAll();
                             return response.resource;
                         }
                     };

                     var iplbFarm = $resource("/ipLoadbalancing/:serviceName/" + type + "/farm/:farmId", {
                         serviceName: "@serviceName",
                         farmId: "@farmId"
                     }, {
                         query: { method: "GET", isArray: true, cache: queryCache },
                         get: { method: "GET", cache: cache },
                         post: { method: "POST", interceptor: interceptor },
                         put: { method: "PUT", interceptor: interceptor },
                         "delete": { method: "DELETE", interceptor: interceptor }
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
