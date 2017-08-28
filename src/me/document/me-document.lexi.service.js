angular.module("ovh-api-services").service("OvhApiMeDocumentLexi", function ($resource, $cacheFactory, $window, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDocumentLexi");
    var queryCache = $cacheFactory("OvhApiMeDocumentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var docResource = $resource("/me/document/:id", {
        id: "@id"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        cors: {
            method: "POST",
            url: "/me/document/cors"
        }
    });

    docResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    docResource.resetCache = function () {
        cache.removeAll();
    };

    docResource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
    };

    docResource.upload = function (fileName, file) {
        return docResource.create({}, {
            name: fileName
        }).$promise.then(function (resp) {
            return docResource.cors({}, {
                origin: $window.location.origin
            }).$promise.then(function () {
                return $http.put(resp.putUrl, file, {
                    serviceType: "storage",
                    headers: {
                        "Content-type": "multipart/form-data"
                    }
                }).then(function () {
                    return docResource.get({
                        id: resp.id
                    }).$promise;
                });
            });
        });
    };

    return docResource;
});
