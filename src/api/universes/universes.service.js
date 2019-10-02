angular.module('ovh-api-services').service('OvhApiUniverses', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiUniversesAapi');
  },
}));
