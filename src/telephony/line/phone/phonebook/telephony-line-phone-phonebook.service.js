angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebook", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContact");
        }
    };
});
