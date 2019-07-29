angular
  .module('ovh-api-services')
  .service('OvhApiMsServices', $injector => ({
    Account() {
      return $injector.get('OvhApiMsServicesAccount');
    },
    Exchange() {
      return $injector.get('OvhApiMsServicesExchange');
    },
    Sharepoint() {
      return $injector.get('OvhApiMsServicesSharepoint');
    },
  }));
