angular.module("ovh-api-services").service("OvhApiSmsPhonebooks", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsPhonebooksLexi");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContact");
        }
    };
});
