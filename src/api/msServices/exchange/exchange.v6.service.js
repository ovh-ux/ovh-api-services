angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesExchangeV6", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMsServicesExchangeV6");

        var interceptor = {
            response: function (response) {
                cache.removeAll();

                return response.data;
            }
        };

        var resource = $resource("/msServices/:serviceName/exchange", {
            serviceName: "@serviceName"
        }, {
            get: { method: "GET", cache: cache, isArray: false },
            edit: { method: "PUT", cache: cache, isArray: false, interceptor: interceptor },
            doesServiceUseAgora: {
                url: "/msServices/:serviceName/exchange/billingMigrated ",
                method: "GET",
                cache: cache,
                isArray: false,
                transformResponse: function (response, headers, status) {
                    return status === 200 ? { serviceUsesAgora: ("" + response).toUpperCase() === "TRUE" } : response;
                }
            }
        });

        resource.resetAllCache = function () {
            resource.resetCache();
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        return resource;
    });
