angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContact", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContactLexi");
        }
    };
});
