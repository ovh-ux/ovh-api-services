angular.module("ovh-api-services").service("OvhApiMeBilling", function ($injector) {
    "use strict";

    return {
        Capacities: function () {
            return $injector.get("OvhApiMeBillingCapacities");
        },
        InvoicesByPostalMail: function () {
            return $injector.get("OvhApiMeBillingInvoicesByPostalMail");
        }
    };
});
