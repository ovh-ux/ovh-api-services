angular.module("ovh-api-services").service("Telephony", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyAapi");
        },
        Erika: function () {
            return $injector.get("TelephonyErika");
        },
        AbbreviatedNumber: function () {
            return $injector.get("TelephonyAbbreviatedNumber");
        },
        Eventtoken: function () {
            return $injector.get("TelephonyEventtoken");
        },
        Fax: function () {
            return $injector.get("TelephonyFax");
        },
        OfferTask: function () {
            return $injector.get("TelephonyOfferTask");
        },
        Line: function () {
            return $injector.get("TelephonyLine");
        },
        Lines: function () {
            return $injector.get("TelephonyLines");
        },
        Number: function () {
            return $injector.get("TelephonyNumber");
        },
        Redirect: function () {
            return $injector.get("TelephonyRedirect");
        },
        Voicemail: function () {
            return $injector.get("TelephonyVoicemail");
        },
        Service: function () {
            return $injector.get("TelephonyService");
        },
        TimeCondition: function () {
            return $injector.get("TelephonyTimeCondition");
        },
        HistoryConsumption: function () {
            return $injector.get("TelephonyHistoryConsumption");
        },
        HistoryRepaymentConsumption: function () {
            return $injector.get("TelephonyHistoryRepaymentConsumption");
        },
        HistoryTollfreeConsumption: function () {
            return $injector.get("TelephonyHistoryTollfreeConsumption");
        },
        Screen: function () {
            return $injector.get("TelephonyScreen");
        },
        Portability: function () {
            return $injector.get("TelephonyPortability");
        },
        Scheduler: function () {
            return $injector.get("TelephonyScheduler");
        },
        Aliases: function () {
            return $injector.get("TelephonyAliases");
        },
        Phonebook: function () {
            return $injector.get("TelephonyPhonebook");
        },
        EasyHunting: function () {
            return $injector.get("TelephonyEasyHunting");
        },
        Rsva: function () {
            return $injector.get("TelephonyRsva");
        },
        Conference: function () {
            return $injector.get("TelephonyConference");
        },
        Vxml: function () {
            return $injector.get("TelephonyVxml");
        },
        Trunks: function () {
            return $injector.get("TelephonyTrunks");
        },
        OvhPabx: function () {
            return $injector.get("TelephonyOvhPabx");
        },
        Task: function () {
            return $injector.get("TelephonyTask");
        }
    };
});
