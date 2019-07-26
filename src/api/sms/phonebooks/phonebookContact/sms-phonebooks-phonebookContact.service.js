angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContact", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContactV6");
        }
    };
});
