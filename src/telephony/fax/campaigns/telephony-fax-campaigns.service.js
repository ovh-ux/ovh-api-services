angular.module("ovh-api-services").service("TelephonyFaxCampaigns", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyFaxCampaignsLexi");
        }
    };
});
