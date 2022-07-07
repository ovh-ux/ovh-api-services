angular.module('ovh-api-services').service('OvhApiPackXdsl', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdsl');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslV6');
    },
    Aapi() {
      return $injector.get('OvhApiPackXdslAapi');
    },
    Task() {
      return $injector.get('OvhApiPackXdslTask');
    },
    Access() {
      return $injector.get('OvhApiPackXdslAccess');
    },
    DomainActivation() {
      return $injector.get('OvhApiPackXdslDomainActivation');
    },
    EmailPro() {
      return $injector.get('OvhApiPackXdslEmailPro');
    },
    ExchangeAccount() {
      return $injector.get('OvhApiPackXdslExchangeAccount');
    },
    ExchangeIndividual() {
      return $injector.get('OvhApiPackXdslExchangeIndividual');
    },
    ExchangeLite() {
      return $injector.get('OvhApiPackXdslExchangeLite');
    },
    HostedEmail() {
      return $injector.get('OvhApiPackXdslHostedEmail');
    },
    Hubic() {
      return $injector.get('OvhApiPackXdslHubic');
    },
    Move() {
      return $injector.get('OvhApiPackXdslMove');
    },
    PromotionCode() {
      return $injector.get('OvhApiPackXdslPromotionCode');
    },
    Resiliation() {
      return $injector.get('OvhApiPackXdslResiliation');
    },
    ServiceInfo() {
      return $injector.get('OvhApiPackXdslServiceInfo');
    },
    SiteBuilderStart() {
      return $injector.get('OvhApiPackXdslSiteBuilderStart');
    },
    Tasks() {
      return $injector.get('OvhApiPackXdslTask');
    },
    VoipBillingAccount() {
      return $injector.get('OvhApiPackXdslVoipBillingAccount');
    },
    VoipEcofax() {
      return $injector.get('OvhApiVoipEcofax');
    },
    VoipLine() {
      return $injector.get('OvhApiPackXdslVoipLine');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
