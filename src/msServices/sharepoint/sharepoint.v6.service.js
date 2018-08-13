angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesSharepointV6", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMsServicesSharepointV6");

        var interceptor = {
            response: function (response) {
                cache.removeAll();
                return response.data;
            }
        };

        var resource = $resource("/msServices/:serviceName/sharepoint", {
            serviceName: "@serviceName"
        }, {
            get: { method: "GET", cache: cache, isArray: false },
            edit: { method: "PUT", cache: cache, isArray: false, interceptor: interceptor },
            doesServiceUseAgora: { url: "/msServices/:serviceName/sharepoint/billingMigrated ", method: "GET", cache: cache, isArray: false }
        });

        resource.resetAllCache = function () {
            resource.resetCache();
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        return resource;
    });
