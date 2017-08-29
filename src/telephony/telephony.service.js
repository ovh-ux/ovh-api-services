angular.module("ovh-api-services").service("OvhApiTelephony", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyErika");
        },
        AbbreviatedNumber: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumber");
        },
        Eventtoken: function () {
            return $injector.get("OvhApiTelephonyEventtoken");
        },
        Fax: function () {
            return $injector.get("OvhApiTelephonyFax");
        },
        OfferTask: function () {
            return $injector.get("OvhApiTelephonyOfferTask");
        },
        Line: function () {
            return $injector.get("OvhApiTelephonyLine");
        },
        Lines: function () {
            return $injector.get("OvhApiTelephonyLines");
        },
        Number: function () {
            return $injector.get("OvhApiTelephonyNumber");
        },
        Redirect: function () {
            return $injector.get("OvhApiTelephonyRedirect");
        },
        Voicemail: function () {
            return $injector.get("OvhApiTelephonyVoicemail");
        },
        Service: function () {
            return $injector.get("OvhApiTelephonyService");
        },
        TimeCondition: function () {
            return $injector.get("OvhApiTelephonyTimeCondition");
        },
        HistoryConsumption: function () {
            return $injector.get("OvhApiTelephonyHistoryConsumption");
        },
        HistoryRepaymentConsumption: function () {
            return $injector.get("OvhApiTelephonyHistoryRepaymentConsumption");
        },
        HistoryTollfreeConsumption: function () {
            return $injector.get("OvhApiTelephonyHistoryTollfreeConsumption");
        },
        Screen: function () {
            return $injector.get("OvhApiTelephonyScreen");
        },
        Portability: function () {
            return $injector.get("OvhApiTelephonyPortability");
        },
        Scheduler: function () {
            return $injector.get("OvhApiTelephonyScheduler");
        },
        Aliases: function () {
            return $injector.get("OvhApiTelephonyAliases");
        },
        Phonebook: function () {
            return $injector.get("OvhApiTelephonyPhonebook");
        },
        EasyHunting: function () {
            return $injector.get("OvhApiTelephonyEasyHunting");
        },
        Rsva: function () {
            return $injector.get("OvhApiTelephonyRsva");
        },
        Conference: function () {
            return $injector.get("OvhApiTelephonyConference");
        },
        Vxml: function () {
            return $injector.get("OvhApiTelephonyVxml");
        },
        Trunks: function () {
            return $injector.get("OvhApiTelephonyTrunks");
        },
        OvhPabx: function () {
            return $injector.get("OvhApiTelephonyOvhPabx");
        },
        Task: function () {
            return $injector.get("OvhApiTelephonyTask");
        }
    };
});
