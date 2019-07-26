angular.module("ovh-api-services").service("OvhApiMeBillingInvoicesByPostalMailV6", function ($resource) {
    "use strict";

    return $resource("/me/billing/invoicesByPostalMail", {}, {
        get: {
            method: "GET",
            isArray: false,
            transformResponse: function (data) {
                // because $resource returns a promise due to boolean type of data
                return {
                    data: angular.fromJson(data)
                };
            }
        },
        post: {
            method: "POST",
            params: {
                enable: "@enable"
            }
        }
    });
});
