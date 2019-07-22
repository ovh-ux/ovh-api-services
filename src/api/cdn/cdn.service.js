angular.module("ovh-api-services").service("OvhApiCdn", function ($injector) {
    "use strict";
    return {
        Dedicated: function () {
            return $injector.get("OvhApiCdnDedicated");
        },
        Website: function () {
            return $injector.get("OvhApiCdnWebsite");
        },
        Webstorage: function () {
            return $injector.get("OvhApiCdnWebstorage");
        }
    };
});
