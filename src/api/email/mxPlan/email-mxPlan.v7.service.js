angular
    .module("ovh-api-services")
    .service(
        "OvhApiEmailMXPlanV7",
        function (apiv7) {
            "use strict";

            var emailMXPlanEndpoint = apiv7("/email/mxplan/:serviceName/", {
                serviceName: "@serviceName"
            });

            return emailMXPlanEndpoint;
        });
