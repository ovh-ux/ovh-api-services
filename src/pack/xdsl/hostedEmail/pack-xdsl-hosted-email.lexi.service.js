"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmailLexi", function ($resource, OvhApiPackXdslHostedEmail) {
    var interceptor = {
        response: function (response) {
            OvhApiPackXdslHostedEmail.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/hostedEmail/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslHostedEmail.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/hostedEmail/options/domains",
            isArray: true,
            cache: OvhApiPackXdslHostedEmail.cache
        }
    }
    );
});
