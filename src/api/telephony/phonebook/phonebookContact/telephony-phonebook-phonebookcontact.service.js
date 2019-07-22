angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContact", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContactV6");
        }
    };
});
