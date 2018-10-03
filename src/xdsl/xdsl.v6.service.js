angular.module("ovh-api-services").service("OvhApiXdslV6", function ($resource, OvhApiXdsl, OvhApiTelecomSidebar) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelecomSidebar.resetCache();
            OvhApiXdsl.resetCache();
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
                cache: OvhApiXdsl.cache
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
                cache: OvhApiXdsl.cache
            },
            incidents: {
                method: "GET",
                cache: OvhApiXdsl.cache
            },
            requestTotalDeconsolidation: {
                method: "POST",
                url: "/xdsl/:xdslId/requestTotalDeconsolidation",
                interceptor: interceptor
            },
            statistics: {
                method: "GET",
                url: "/xdsl/:xdslId/statistics",
                cache: OvhApiXdsl.cache
            },
            lines: {
                method: "GET",
                url: "/xdsl/:xdslId/lines",
                isArray: true,
                cache: OvhApiXdsl.cache
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
            requestPPPLoginMail: {
                method: "POST",
                url: "/xdsl/:xdslId/requestPPPLoginMail",
                interceptor: interceptor
            },
            updateInvalidOrMissingRio: {
                method: "POST",
                url: "/xdsl/:xdslId/updateInvalidOrMissingRio",
                interceptor: interceptor
            },
            getTasks: {
                method: "GET",
                url: "/xdsl/:xdslId/tasks",
                isArray: true,
                cache: OvhApiXdsl.cache
            },
            getTask: {
                method: "GET",
                url: "/xdsl/:xdslId/tasks/:taskId",
                cache: OvhApiXdsl.cache
            }
        }
    );
});
