angular.module("ovh-api-services").service("OvhApiTelephonyLinePhone", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneLexi");
        },
        Aapi: angular.noop,
        FunctionKey: function () {
            return $injector.get("OvhApiTelephonyLineFunctionPhone");
        },
        Phonebook: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebook");
        },
        RMA: function () {
            return $injector.get("OvhApiTelephonyLinePhoneRMA");
        }
    };
});
