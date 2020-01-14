angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesAccountMfa', ($injector) => ({
    v6() {
      return $injector.get('OvhApiMsServicesAccountMfaV6');
    },
  }));
