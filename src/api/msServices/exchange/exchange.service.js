angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesExchange', ($injector) => ({
    v6() {
      return $injector.get('OvhApiMsServicesExchangeV6');
    },
  }));
