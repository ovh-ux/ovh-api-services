angular.module("ovh-api-services").service("SmsPhonebooksLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsPhonebooksLexi");
    var queryCache = $cacheFactory("SmsPhonebooksLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var phonebooksResource = $resource("/sms/:serviceName/phonebooks/:bookKey", {
        serviceName: "@serviceName",
        bookKey: "@bookKey"
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
            url: "/sms/:serviceName/phonebooks",
            interceptor: interceptor,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { bookKey: angular.fromJson(data) };
                }

                return null;
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        getExport: {
            method: "GET",
            url: "/sms/:serviceName/phonebooks/:bookKey/export"
        },
        "import": {
            method: "POST",
            url: "/sms/:serviceName/phonebooks/:bookKey/import",
            interceptor: interceptor
        }
    });

    phonebooksResource.resetCache = function () {
        cache.removeAll();
    };

    phonebooksResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebooksResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return phonebooksResource;
});
