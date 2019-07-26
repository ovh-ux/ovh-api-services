angular.module("ovh-api-services").service("OvhApiTelephonyLinesV6", function ($resource) {
    "use strict";

    return $resource("/telephony/lines/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        changeContact: {
            method: "POST",
            url: "/telephony/lines/:serviceName/changeContact",
            isArray: true
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/lines/:serviceName/serviceInfos"
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/lines/:serviceName/serviceInfos"
        }
    });
});
