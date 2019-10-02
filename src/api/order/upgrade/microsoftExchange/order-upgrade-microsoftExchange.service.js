angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradeMicrosoftExchange', ($injector) => ({
    v6() {
      return $injector.get('OvhApiOrderUpgradeMicrosoftExchangeV6');
    },
  }));
