angular.module('ovh-api-services').service('OvhApiSmsOutgoing', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsOutgoingV6');
  },
}));
