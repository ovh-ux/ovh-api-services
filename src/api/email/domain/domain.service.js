angular
    .module("ovh-api-services")
    .service(
        "OvhApiEmailDomain",
        function ($injector) {
            "use strict";

            return {
                v6: function () {
                    return $injector.get("OvhApiEmailDomainV6");
                }
            };
        });
