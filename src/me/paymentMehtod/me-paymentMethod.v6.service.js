angular.module("ovh-api-services").service("OvhApiMePaymentMethodV6", function ($resource) {
    "use strict";

    return $resource("/me/paymentMethod/:id", {
        id: "@id"
    }, {
      edit: {
        method: 'PUT'
      }
    });

});
