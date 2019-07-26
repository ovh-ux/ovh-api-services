angular.module("ovh-api-services").service("OvhApiTelephonyFaxCampaigns", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyFaxCampaignsV6");
        }
    };
});
