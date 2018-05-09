angular.module("ovh-api-services").service("OvhApiMeBillingInvoicesByPostalMail", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeBillingInvoicesByPostalMailV6");
        }
    };
});
