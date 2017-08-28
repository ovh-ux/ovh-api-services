angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabx");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxLexi");
        },
        Dialplan: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplan");
        },
        Sound: function () {
            return $injector.get("OvhApiTelephonyOvhPabxSound");
        },
        Menu: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenu");
        },
        Hunting: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHunting");
        },
        Records: function () {
            return $injector.get("OvhApiTelephonyOvhPabxRecords");
        },
        Tts: function () {
            return $injector.get("OvhApiTelephonyOvhPabxTts");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
