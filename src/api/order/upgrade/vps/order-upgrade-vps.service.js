angular
  .module('ovh-api-services')
  .service('OvhApiOrderVps', $injector => ({
    v6() {
      return $injector.get('OvhApiOrderVpsV6');
    },
  }));
