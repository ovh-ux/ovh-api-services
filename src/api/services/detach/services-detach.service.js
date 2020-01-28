angular
  .module('ovh-api-services')
  .service('OvhApiServicesDetach', ($injector) => ({
    v6() {
      return $injector.get('OvhApiServicesDetachV6');
    },
  }));
