angular.module('ovh-api-services').service('OvhApiWebCoach', ($injector) => ({
  v6() {
    return $injector.get('OvhApiWebCoachV6');
  },
}));
