angular.module("ovh-api-services").service("TelephonyEasyHunting", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingLexi");
        },
        Sound: function () {
            return $injector.get("TelephonyEasyHuntingSound");
        },
        Hunting: function () {
            return $injector.get("TelephonyEasyHuntingHunting");
        },
        ScreenListConditions: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditions");
        },
        TimeConditions: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditions");
        },
        Records: function () {
            return $injector.get("TelephonyEasyHuntingRecords");
        }
    };
});
