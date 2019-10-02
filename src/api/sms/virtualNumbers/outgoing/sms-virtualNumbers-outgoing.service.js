angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersOutgoing', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsVirtualNumbersOutgoingV6');
  },
}));
