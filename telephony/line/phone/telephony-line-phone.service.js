angular.module("ovh-api-services").service("TelephonyLinePhone", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhoneLexi");
        },
        Aapi: angular.noop,
        FunctionKey: function () {
            return $injector.get("TelephonyLineFunctionPhone");
        },
        Phonebook: function () {
            return $injector.get("TelephonyLinePhonePhonebook");
        },
        RMA: function () {
            return $injector.get("TelephonyLinePhoneRMA");
        }
    };
});
