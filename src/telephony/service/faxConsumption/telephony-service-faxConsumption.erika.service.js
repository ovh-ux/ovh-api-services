angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumptionErika", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
});

