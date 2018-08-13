angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesV6", function ($resource, $cacheFactory) {
        "use strict";

        var cache = $cacheFactory("OvhApiMsServicesV6");
        var queryCache = $cacheFactory("OvhApiMsServicesV6Query");

        var interceptor = {
            response: function (response) {
                cache.remove(response.config.url);
                queryCache.removeAll();
                return response.resource;
            }
        };

        var resource = $resource("/msServices/:serviceName", {
            serviceName: "@serviceName"
        }, {
            query: { method: "GET", cache: cache, isArray: true, url: "/msServices" },
            get: { method: "GET", cache: cache, isArray: false },
            edit: { method: "PUT", cache: cache, isArray: false, interceptor: interceptor }
        });

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        resource.resetAllCache = function () {
            this.resetCache();
            this.resetQueryCache();
        };

        return resource;
    });
