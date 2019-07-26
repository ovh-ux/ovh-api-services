angular.module("ovh-api-services").service("OvhApiCdnDedicatedDomainsBackends", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedDomainsBackendsV6");
        }
    };
});
