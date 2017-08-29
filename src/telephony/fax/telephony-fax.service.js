angular.module("ovh-api-services").service("OvhApiTelephonyFax", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyFaxLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyFaxAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyFaxErika");
        },
        Campaigns: function () {
            return $injector.get("OvhApiTelephonyFaxCampaigns");
        }
    };
});
