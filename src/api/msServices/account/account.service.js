angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesAccount', $injector => ({
    v6() {
      return $injector.get('OvhApiMsServicesAccountV6');
    },
  }));
