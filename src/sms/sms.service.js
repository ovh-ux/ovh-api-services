angular.module("ovh-api-services").service("Sms", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("Sms");

    return {
        Aapi: function () {
            return $injector.get("SmsAapi");
        },
        Lexi: function () {
            return $injector.get("SmsLexi");
        },
        Erika: function () {
            return $injector.get("SmsErika");
        },
        Jobs: function () {
            return $injector.get("SmsJobs");
        },
        Senders: function () {
            return $injector.get("SmsSenders");
        },
        Blacklists: function () {
            return $injector.get("SmsBlacklists");
        },
        Receivers: function () {
            return $injector.get("SmsReceivers");
        },
        Incoming: function () {
            return $injector.get("SmsIncoming");
        },
        Outgoing: function () {
            return $injector.get("SmsOutgoing");
        },
        Users: function () {
            return $injector.get("SmsUsers");
        },
        Hlr: function () {
            return $injector.get("SmsHlr");
        },
        Templates: function () {
            return $injector.get("SmsTemplates");
        },
        Task: function () {
            return $injector.get("SmsTask");
        },
        VirtualNumbers: function () {
            return $injector.get("SmsVirtualNumbers");
        },
        Phonebooks: function () {
            return $injector.get("SmsPhonebooks");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
