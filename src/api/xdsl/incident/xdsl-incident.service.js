angular.module('ovh-api-services').service('OvhApiXdslIncident', ($injector) => ({
  v6() {
    return $injector.get('OvhApiXdslIncidentV6');
  },
}));
