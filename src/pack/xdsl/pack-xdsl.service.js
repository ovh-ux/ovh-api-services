angular.module("ovh-api-services").service("PackXdsl", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdsl");

    return {
        Lexi: function () {
            return $injector.get("PackXdslLexi");
        },
        Aapi: function () {
            return $injector.get("PackXdslAapi");
        },
        Erika: function () {
            return $injector.get("PackXdslErika");
        },
        Task: function () {
            return $injector.get("PackXdslTask");
        },
        Access: function () {
            return $injector.get("PackXdslAccess");
        },
        DomainActivation: function () {
            return $injector.get("PackXdslDomainActivation");
        },
        ExchangeAccount: function () {
            return $injector.get("PackXdslExchangeAccount");
        },
        ExchangeIndividual: function () {
            return $injector.get("PackXdslExchangeIndividual");
        },
        ExchangeLite: function () {
            return $injector.get("PackXdslExchangeLite");
        },
        HostedEmail: function () {
            return $injector.get("PackXdslHostedEmail");
        },
        Hubic: function () {
            return $injector.get("PackXdslHubic");
        },
        Move: function () {
            return $injector.get("PackXdslMove");
        },
        PromotionCode: function () {
            return $injector.get("PackXdslPromotionCode");
        },
        Resiliation: function () {
            return $injector.get("PackXdslResiliation");
        },
        ServiceInfo: function () {
            return $injector.get("PackXdslServiceInfo");
        },
        SiteBuilderStart: function () {
            return $injector.get("PackXdslSiteBuilderStart");
        },
        Tasks: function () {
            return $injector.get("PackXdslTask");
        },
        VoipBillingAccount: function () {
            return $injector.get("PackXdslVoipBillingAccount");
        },
        VoipEcofax: function () {
            return $injector.get("VoipEcofax");
        },
        VoipLine: function () {
            return $injector.get("PackXdslVoipLine");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
