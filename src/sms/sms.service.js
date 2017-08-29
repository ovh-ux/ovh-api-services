angular.module("ovh-api-services").service("OvhApiSms", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiSms");

    return {
        Aapi: function () {
            return $injector.get("OvhApiSmsAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiSmsLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiSmsErika");
        },
        Jobs: function () {
            return $injector.get("OvhApiSmsJobs");
        },
        Senders: function () {
            return $injector.get("OvhApiSmsSenders");
        },
        Blacklists: function () {
            return $injector.get("OvhApiSmsBlacklists");
        },
        Receivers: function () {
            return $injector.get("OvhApiSmsReceivers");
        },
        Incoming: function () {
            return $injector.get("OvhApiSmsIncoming");
        },
        Outgoing: function () {
            return $injector.get("OvhApiSmsOutgoing");
        },
        Users: function () {
            return $injector.get("OvhApiSmsUsers");
        },
        Hlr: function () {
            return $injector.get("OvhApiSmsHlr");
        },
        Templates: function () {
            return $injector.get("OvhApiSmsTemplates");
        },
        Task: function () {
            return $injector.get("OvhApiSmsTask");
        },
        VirtualNumbers: function () {
            return $injector.get("OvhApiSmsVirtualNumbers");
        },
        Phonebooks: function () {
            return $injector.get("OvhApiSmsPhonebooks");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
