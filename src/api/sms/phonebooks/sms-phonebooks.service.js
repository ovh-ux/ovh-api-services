angular.module("ovh-api-services").service("OvhApiSmsPhonebooks", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsPhonebooksV6");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContact");
        }
    };
});
