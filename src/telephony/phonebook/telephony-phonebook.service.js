angular.module("ovh-api-services").service("OvhApiTelephonyPhonebook", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyPhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContact");
        }
    };
});
