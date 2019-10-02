angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersIncoming', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsVirtualNumbersIncomingV6');
  },
}));
