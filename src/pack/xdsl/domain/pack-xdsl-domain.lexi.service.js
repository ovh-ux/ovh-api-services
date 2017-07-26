angular.module("ovh-api-services").service("PackXdslDomainActivationLexi", function ($resource, PackXdslDomainActivation) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslDomainActivation.resetCache();
            return response.resource;
        }
    };

    return $resource(
        "/pack/xdsl/:packId/domain/services", {
            packId: "@id"
        }, {
            postServices: {
                method: "POST",
                isArray: false,
                interceptor: interceptor
            },
            getServices: {
                method: "GET",
                isArray: true,
                cache: PackXdslDomainActivation.cache
            },
            getTlds: {
                method: "GET",
                url: "/pack/xdsl/:packId/domain/options/tlds",
                isArray: true,
                cache: PackXdslDomainActivation.cache
            }
        });
});

