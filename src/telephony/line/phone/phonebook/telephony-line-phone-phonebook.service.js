angular.module("ovh-api-services").service("TelephonyLinePhonePhonebook", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhonePhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("TelephonyLinePhonePhonebookPhonebookContact");
        }
    };
});
