angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContactLexi");
        }
    };
});
