angular.module("ovh-api-services").service("CloudProjectConsumptionLexi", function ($resource) {
    "use strict";

    var cloudProjectConsumptionResource = $resource("/cloud/project/:serviceName/consumption", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET"
        },
        current: {
            url: "/cloud/project/:serviceName/usage/current",
            method: "GET"
        },
        bills: {
            url: "/cloud/project/:serviceName/usage/history",
            params: {
                serviceName: "@serviceName"
            },
            queryParams: {
                from: "@from",
                to: "@to"
            },
            method: "GET",
            isArray: true
        },
        bill: {
            url: "/cloud/project/:serviceName/usage/history/:usageId",
            params: { usageId: "@usageId" },
            method: "GET"
        }
    });

    cloudProjectConsumptionResource.getConsumption = function (serviceName, date) {
        if (date.startOf("month").isSame(moment().startOf("month"))) {
            return this.current({ serviceName: serviceName }).$promise;
        }
        var from = date.startOf("month").subtract(1, "day").toISOString();
        var to = date.endOf("month").toISOString();
        return cloudProjectConsumptionResource.bills({ serviceName: serviceName, from: from, to: to }).$promise
            .then(function (resp) {
                return _.map(resp, "id");
            })
            .then(function (billIds) {
                if (_.any(billIds)) {
                    return cloudProjectConsumptionResource.bill({ serviceName: serviceName, usageId: _.first(billIds) }).$promise;
                }
                return null;

            });

    };

    return cloudProjectConsumptionResource;
});
