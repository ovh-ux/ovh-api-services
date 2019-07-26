angular
    .module("ovh-api-services")
    .service(
        "OvhApiEmailMXPlan",
        function ($injector) {
            "use strict";

            return {
                v7: function () {
                    return $injector.get("OvhApiEmailMXPlanV7");
                }
            };
        });
