angular.module("ovh-api-services").service("Cdn", function ($injector) {
    "use strict";
    return {
        Dedicated: function () {
            return $injector.get("CdnDedicated");
        },
        Website: function () {
            return $injector.get("CdnWebsite");
        },
        Webstorage: function () {
            return $injector.get("CdnWebstorage");
        }
    };
});
