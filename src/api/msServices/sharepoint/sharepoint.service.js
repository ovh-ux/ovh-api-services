angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesSharepoint', $injector => ({
    v6() {
      return $injector.get('OvhApiMsServicesSharepointV6');
    },
  }));
