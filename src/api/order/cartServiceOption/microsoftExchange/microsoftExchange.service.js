angular.module('ovh-api-services').service('OvhApiOrderCartServiceOptionMicrosoftExchange', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderCartServiceOptionMicrosoftExchangeV6');
  },
}));
