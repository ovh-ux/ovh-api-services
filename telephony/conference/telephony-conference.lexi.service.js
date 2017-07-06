angular.module("ovh-api-services").service("TelephonyConferenceLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/conference/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        informations: {
            method: "GET",
            url: "/telephony/:billingAccount/conference/:serviceName/informations",
            isArray: false
        },
        settings: {
            method: "GET",
            url: "/telephony/:billingAccount/conference/:serviceName/settings",
            isArray: false
        },
        updateSettings: {
            method: "PUT",
            url: "/telephony/:billingAccount/conference/:serviceName/settings",
            isArray: false
        },
        lock: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/lock",
            isArray: false
        },
        unlock: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/unlock",
            isArray: false
        },
        announceUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/announceUpload",
            isArray: false
        }
    });

});
