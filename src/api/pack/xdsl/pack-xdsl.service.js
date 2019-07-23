angular.module("ovh-api-services").service("OvhApiPackXdsl", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdsl");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAapi");
        },
        v7: function () {
            return $injector.get("OvhApiPackXdslV7");
        },
        Task: function () {
            return $injector.get("OvhApiPackXdslTask");
        },
        Access: function () {
            return $injector.get("OvhApiPackXdslAccess");
        },
        DomainActivation: function () {
            return $injector.get("OvhApiPackXdslDomainActivation");
        },
        EmailPro: function () {
            return $injector.get("OvhApiPackXdslEmailPro");
        },
        ExchangeAccount: function () {
            return $injector.get("OvhApiPackXdslExchangeAccount");
        },
        ExchangeIndividual: function () {
            return $injector.get("OvhApiPackXdslExchangeIndividual");
        },
        ExchangeLite: function () {
            return $injector.get("OvhApiPackXdslExchangeLite");
        },
        HostedEmail: function () {
            return $injector.get("OvhApiPackXdslHostedEmail");
        },
        Hubic: function () {
            return $injector.get("OvhApiPackXdslHubic");
        },
        Move: function () {
            return $injector.get("OvhApiPackXdslMove");
        },
        PromotionCode: function () {
            return $injector.get("OvhApiPackXdslPromotionCode");
        },
        Resiliation: function () {
            return $injector.get("OvhApiPackXdslResiliation");
        },
        ServiceInfo: function () {
            return $injector.get("OvhApiPackXdslServiceInfo");
        },
        SiteBuilderStart: function () {
            return $injector.get("OvhApiPackXdslSiteBuilderStart");
        },
        Tasks: function () {
            return $injector.get("OvhApiPackXdslTask");
        },
        VoipBillingAccount: function () {
            return $injector.get("OvhApiPackXdslVoipBillingAccount");
        },
        VoipEcofax: function () {
            return $injector.get("OvhApiVoipEcofax");
        },
        VoipLine: function () {
            return $injector.get("OvhApiPackXdslVoipLine");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
