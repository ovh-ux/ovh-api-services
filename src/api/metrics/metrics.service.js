angular
  .module('ovh-api-services')
  .service('OvhApiMetrics', $injector => ({
    Token() {
      return $injector.get('OvhApiMetricsToken');
    },
    v6() {
      return $injector.get('OvhApiMetricsV6');
    },
  }));
