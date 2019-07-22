angular.module("ovh-api-services").service("OvhApiTelephonyLinePhone", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhoneV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyLinePhoneV7");
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
