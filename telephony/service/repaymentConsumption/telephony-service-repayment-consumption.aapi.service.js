angular.module("ovh-api-services").service("TelephonyServiceRepaymentConsumptionAapi", function ($resource) {
    "use strict";

    // this URL isn't called but the `repayment` call use this one under the hood.
    // if you encounter any problem, you can pleaser refer to mister JC Alleman. Cheers.
    return $resource("/telephony/:billingAccount/service/:serviceName/repaymentConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        repayment: {
            method: "GET",
            url: "/telephony/:billingAccount/repayment",
            serviceType: "aapi",
            isArray: true
        }
    });
});
