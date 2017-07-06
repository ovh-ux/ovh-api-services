angular.module("ovh-api-services").service("TelephonyLinePhonePhonebookPhonebookContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhonePhonebookPhonebookContactLexi");
        }
    };
});
