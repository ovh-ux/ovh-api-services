angular.module("ovh-api-services").service("OvhApiXdslTemplateModemV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslTemplateModemV6");
    var queryCache = $cacheFactory("OvhApiXdslTemplateModemV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var templateModemResource = $resource("/xdsl/templateModem", {
        xdslId: "@xdslId",
        name: "@name",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            url: "/xdsl/templateModem/:name",
            cache: cache
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        getTemplate: {
            method: "GET",
            url: "/xdsl/templateModem/:name"
        },
        updateTemplate: {
            method: "PUT",
            url: "/xdsl/templateModem/:name",
            interceptor: interceptor
        },
        deleteTemplate: {
            method: "DELETE",
            url: "/xdsl/templateModem/:name",
            interceptor: interceptor
        },
        applyTemplate: {
            method: "POST",
            url: "/xdsl/:xdslId/applyTemplateToModem"
        }
    });

    templateModemResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return templateModemResource;
});
