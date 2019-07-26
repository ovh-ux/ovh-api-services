angular.module("ovh-api-services").service("OvhApiTelephonyPhonebook", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyPhonebookV6");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContact");
        }
    };
});
