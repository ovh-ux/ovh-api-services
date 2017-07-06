"use strict";

angular.module("ovh-api-services").service("PackXdslHostedEmailLexi", function ($resource, PackXdslHostedEmail) {
    var interceptor = {
        response: function (response) {
            PackXdslHostedEmail.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/hostedEmail/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: PackXdslHostedEmail.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/hostedEmail/options/domains",
            isArray: true,
            cache: PackXdslHostedEmail.cache
        }
    }
    );
});
