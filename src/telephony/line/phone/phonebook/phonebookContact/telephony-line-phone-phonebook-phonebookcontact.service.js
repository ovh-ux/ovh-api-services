angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookPhonebookContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContactLexi");
        }
    };
});
