angular.module("ovh-api-services").service("TelephonyFax", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyFaxLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyFaxAapi");
        },
        Erika: function () {
            return $injector.get("TelephonyFaxErika");
        },
        Campaigns: function () {
            return $injector.get("TelephonyFaxCampaigns");
        }
    };
});
