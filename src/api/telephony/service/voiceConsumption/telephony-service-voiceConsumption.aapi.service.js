angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionAapi");

    return $resource("/telephony/:billingAccount/consumption", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            serviceType: "aapi",
            isArray: false,
            cache: cache
        }
    }
    );
});
