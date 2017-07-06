angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumptionAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyServiceVoiceConsumptionAapi");

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
