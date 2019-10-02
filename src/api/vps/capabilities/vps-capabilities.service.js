angular.module('ovh-api-services').service('OvhApiVpsCapabilities', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiVpsCapabilitiesAapi');
  },
}));
