angular.module('ovh-api-services').service('OvhApiServices', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiServicesAapi');
  },
  Detach() {
    return $injector.get('OvhApiServicesDetach');
  },
  Form() {
    return $injector.get('OvhApiServicesForm');
  },
  v6() {
    return $injector.get('OvhApiServicesV6');
  },
}));
