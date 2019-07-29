angular
  .module('ovh-api-services')
  .service('OvhApiMetricsToken', $injector => ({
    v6() {
      return $injector.get('OvhApiMetricsTokenV6');
    },
  }));
