angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebook", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookV6");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContact");
        }
    };
});
