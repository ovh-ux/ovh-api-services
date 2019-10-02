angular.module('ovh-api-services').service('OvhApiSmsIncoming', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsIncomingV6');
  },
}));
