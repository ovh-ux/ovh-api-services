angular.module("ovh-api-services").service("TelephonyOvhPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabx");

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxLexi");
        },
        Dialplan: function () {
            return $injector.get("TelephonyOvhPabxDialplan");
        },
        Sound: function () {
            return $injector.get("TelephonyOvhPabxSound");
        },
        Menu: function () {
            return $injector.get("TelephonyOvhPabxMenu");
        },
        Hunting: function () {
            return $injector.get("TelephonyOvhPabxHunting");
        },
        Records: function () {
            return $injector.get("TelephonyOvhPabxRecords");
        },
        Tts: function () {
            return $injector.get("TelephonyOvhPabxTts");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
