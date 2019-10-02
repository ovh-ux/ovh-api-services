angular.module('ovh-api-services').service('OvhApiMeAlerts', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiMeAlertsAapi');
  },
}));
