angular.module("ovh-api-services").service("OvhApiSmsTemplatesV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsTemplatesV6");
    var queryCache = $cacheFactory("OvhApiSmsTemplatesV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var templates = $resource("/sms/:serviceName/templatesControl/:name", {
        serviceName: "@serviceName",
        name: "@name"
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
        create: {
            method: "POST",
            url: "/sms/:serviceName/templatesControl",
            isArray: false,
            interceptor: interceptor
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        relaunchValidation: {
            method: "POST",
            url: "/sms/:serviceName/templatesControl/:name/relaunchValidation",
            interceptor: interceptor
        }
    });

    templates.resetCache = function () {
        cache.removeAll();
    };

    templates.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return templates;
});
