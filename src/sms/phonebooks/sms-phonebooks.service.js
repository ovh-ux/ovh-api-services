angular.module("ovh-api-services").service("SmsPhonebooks", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsPhonebooksLexi");
        },
        PhonebookContact: function () {
            return $injector.get("SmsPhonebooksPhonebookContact");
        }
    };
});
