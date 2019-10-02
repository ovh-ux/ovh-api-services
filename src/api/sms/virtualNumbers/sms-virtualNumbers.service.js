angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbers', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsVirtualNumbersV6');
  },
  Incoming() {
    return $injector.get('OvhApiSmsVirtualNumbersIncoming');
  },
  Jobs() {
    return $injector.get('OvhApiSmsVirtualNumbersJobs');
  },
  Outgoing() {
    return $injector.get('OvhApiSmsVirtualNumbersOutgoing');
  },
}));
