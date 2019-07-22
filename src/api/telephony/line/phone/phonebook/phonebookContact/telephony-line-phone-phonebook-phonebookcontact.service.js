angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookPhonebookContact", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContactV6");
        }
    };
});
