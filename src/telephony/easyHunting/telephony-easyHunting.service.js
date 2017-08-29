angular.module("ovh-api-services").service("OvhApiTelephonyEasyHunting", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingLexi");
        },
        Sound: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingSound");
        },
        Hunting: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHunting");
        },
        ScreenListConditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditions");
        },
        TimeConditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditions");
        },
        Records: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingRecords");
        }
    };
});
