angular.module("ovh-api-services").service("OvhApiPackXdslV6", function ($resource, OvhApiTelecomSidebar, OvhApiPackXdsl) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelecomSidebar.resetCache();
            OvhApiPackXdsl.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId", {
        packId: "@id"
    }, {
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        getServiceInfos: {
            method: "GET",
            url: "/pack/xdsl/:packId/serviceInfos",
            cache: OvhApiPackXdsl.cache
        },
        getServices: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packId/services",
            cache: OvhApiPackXdsl.cache,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    var services = angular.fromJson(data);
                    services.forEach(function (service) {
                        service.available = service.total - (service.used + service.inCreation);
                    });
                    return services;
                }
                return data;
            }
        },
        migrationOffers: {
            method: "POST",
            isArray: false,
            url: "/pack/xdsl/:packName/migration/offers",
            params: {
                packName: "@packName"
            }
        },
        migrate: {
            method: "POST",
            isArray: false,
            url: "/pack/xdsl/:packName/migration/migrate",
            params: {
                packName: "@packName"
            }
        },
        shippingAddresses: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packName/shippingAddresses",
            params: {
                packName: "@packName",
                context: "@context"
            }
        },
        resiliationFollowUp: {
            method: "GET",
            url: "/pack/xdsl/:packName/resiliationFollowUp"
        }
    }
    );
}
);
