angular.module('ovh-api-services').service('OvhApiSmsTask', $injector => ({
  v6() {
    return $injector.get('OvhApiTaskV6');
  },
}));
