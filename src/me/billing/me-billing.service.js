angular.module("ovh-api-services").service("OvhApiMeBilling", function ($injector) {
    "use strict";

    return {
        InvoicesByPostalMail: function () {
            return $injector.get("OvhApiMeBillingInvoicesByPostalMail");
        }
    };
});
