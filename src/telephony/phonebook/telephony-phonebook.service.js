angular.module("ovh-api-services").service("TelephonyPhonebook", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyPhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("TelephonyPhonebookPhonebookContact");
        }
    };
});
