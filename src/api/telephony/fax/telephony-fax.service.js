angular.module("ovh-api-services").service("OvhApiTelephonyFax", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyFaxV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyFaxAapi");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyFaxV7");
        },
        Campaigns: function () {
            return $injector.get("OvhApiTelephonyFaxCampaigns");
        }
    };
});
