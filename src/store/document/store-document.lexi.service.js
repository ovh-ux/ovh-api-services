angular.module("ovh-api-services").service("StoreDocumentLexi", function ($resource, $cacheFactory, $http, $q) {
    "use strict";

    var cache = $cacheFactory("StoreDocumentLexi");
    var queryCache = $cacheFactory("StoreDocumentLexiQuery");

    var docResource = $resource("/store/document/:documentId", { documentId: "@documentId" }, {
        query: { method: "GET", cache: queryCache },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": { method: "DELETE", interceptor: interceptor },
        cors: {
            method: "POST",
            url: "/store/document/cors"
        }
    });

    var interceptor = {
        response: function (response) {
            docResource.resetCache();
            return response.data;
        }
    };

    docResource.upload = function (fileName, file, tags) {
        var formattedTags = _.map(tags, function (v, k) {
            return { key: k, value: v };
        });

        var documentParams = {
            name: fileName,
            tags: formattedTags
        };

        var document;

        return docResource.create({}, documentParams).$promise
            .then(function (doc) {
                document = doc;

                return $http.put(doc.putUrl, file, {
                    serviceType: "storage",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).catch(function (err) {
                    docResource.delete({ documentId: document.id });
                    return $q.reject(err);
                });
            })
            .then(function () {
                return document.id;
            });
    };

    docResource.resetCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return docResource;
});

