"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionLexi", function ($resource, TelephonyTimeCondition) {

    var interceptor = {
        response: function (response) {
            TelephonyTimeCondition.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/timeCondition/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getOptions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/options",
            method: "GET",
            cache: TelephonyTimeCondition.cache,
            isArray: false
        },
        setOptions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/options",
            method: "PUT",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use TelephonyTimeConditionCondition instead
                 */
        addCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "POST",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use TelephonyTimeConditionCondition instead
                 */
        updateCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "PUT",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use TelephonyTimeConditionCondition instead
                 */
        deleteCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "DELETE",
            interceptor: interceptor,
            isArray: false
        }
    });

});
