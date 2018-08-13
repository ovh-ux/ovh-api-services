angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesAccountV6", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMsServicesAccountV6");

        var resource = $resource("/msServices/:serviceName/account/:userPrincipalName", {
            serviceName: "@serviceName",
            userPrincipalName: "@userPrincipalName"
        }, {
            getExchange: { method: "GET", cache: cache, isArray: false, url: "/msServices/:serviceName/account/:userPrincipalName/exchange" }
        });

        resource.resetAllCache = function () {
            resource.resetCache();
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        return resource;
    });
