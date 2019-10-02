angular.module('ovh-api-services').service('OvhApiSmsReceivers', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsReceiversV6');
  },
}));
