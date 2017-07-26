angular.module("ovh-api-services").service("StorePartnerLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("StorePartnerLexi");
    var queryCache = $cacheFactory("StorePartnerLexiQuery");

    var partner = $resource("/store/partner/:partnerId", { partnerId: "@partnerId" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },

        /* products */
        queryProduct: {
            url: "/store/partner/:partnerId/product",
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getProduct: {
            url: "/store/partner/:partnerId/product/:productId",
            params: {
                productId: "@productId"
            },
            cache: cache
        },
        createProduct: {
            method: "POST",
            url: "/store/partner/:partnerId/product",
            interceptor: interceptor
        },
        deleteProduct: {
            method: "DELETE",
            url: "/store/partner/:partnerId/product/:productId",
            params: {
                productId: "@productId"
            },
            interceptor: interceptor
        },
        updateProduct: {
            method: "PUT",
            url: "/store/partner/:partnerId/product/:productId",
            params: {
                productId: "@productId"
            },
            interceptor: interceptor
        },

        /** document link */
        queryLinkedDocuments: {
            url: "/store/partner/:partnerId/document",
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        linkDocument: {
            method: "POST",
            url: "/store/partner/:partnerId/document",
            isArray: true,
            interceptor: interceptor
        },
        unlinkDocument: {
            method: "DELETE",
            url: "/store/partner/:partnerId/document/:documentId",
            params: {
                documentId: "@documentId"
            },
            interceptor: interceptor,
            isArray: true
        },

        /* product's documents */
        queryProductLinkedDocuments: {
            url: "/store/partner/:partnerId/product/:productId/document",
            method: "GET",
            params: {
                productId: "@productId"
            },
            isArray: true,
            cache: queryCache
        },

        linkDocumentToProduct: {
            method: "POST",
            url: "/store/partner/:partnerId/product/:productId/document",
            isArray: true,
            interceptor: interceptor,
            params: {
                productId: "@productId"
            }
        },

        unlinkDocumentFromProduct: {
            method: "DELETE",
            url: "/store/partner/:partnerId/product/:productId/document/:documentId",
            isArray: true,
            interceptor: interceptor,
            params: {
                productId: "@productId",
                documentId: "@documentId"
            }
        }
    });

    var interceptor = {
        response: function (response) {
            partner.resetCache();
            return response.data;
        }
    };

    partner.resetCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return partner;
});
