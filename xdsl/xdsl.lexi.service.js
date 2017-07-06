angular.module("ovh-api-services").service("XdslLexi", function ($resource, Xdsl, TelecomSidebar) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelecomSidebar.resetCache();
            Xdsl.resetCache();
            return response.resource;
        }
    };

    return $resource(
        "/xdsl/:xdslId", {
            xdslId: "@id"
        }, {
            query: {
                method: "GET",
                isArray: true,
                cache: Xdsl.cache
            },
            put: {
                method: "PUT",
                url: "/xdsl/:xdslId",
                interceptor: interceptor
            },
            getOrder: {
                method: "GET",
                url: "/xdsl/:xdslId/orderFollowup",
                isArray: true,
                cache: Xdsl.cache
            },
            changeLns: {
                method: "POST",
                url: "/xdsl/:xdslId/changeLns",
                interceptor: interceptor
            },
            incidents: {
                method: "GET",
                cache: Xdsl.cache
            },
            requestTotalDeconsolidation: {
                method: "POST",
                url: "/xdsl/:xdslId/requestTotalDeconsolidation",
                interceptor: interceptor
            },
            statistics: {
                method: "GET",
                url: "/xdsl/:xdslId/statistics",
                cache: Xdsl.cache
            },
            lines: {
                method: "GET",
                url: "/xdsl/:xdslId/lines",
                isArray: true,
                cache: Xdsl.cache
            },
            eligibilityCities: {
                method: "GET",
                url: "/xdsl/eligibility/cities",
                isArray: true,
                cancellable: true
            },
            eligibilityStreets: {
                method: "GET",
                url: "/xdsl/eligibility/streets",
                isArray: true,
                cancellable: true
            },
            canMigrateToPPP: {
                method: "GET",
                url: "/xdsl/:xdslId/canMigrateToPPP"
            },
            migrateToPPP: {
                method: "POST",
                url: "/xdsl/:xdslId/migrateToPPP",
                interceptor: interceptor
            },
            requestPPPLoginMail: {
                method: "POST",
                url: "/xdsl/:xdslId/requestPPPLoginMail",
                interceptor: interceptor
            }
        }
    );
});
