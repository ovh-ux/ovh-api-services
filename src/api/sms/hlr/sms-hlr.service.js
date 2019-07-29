angular.module('ovh-api-services').service('OvhApiSmsHlr', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsHlrV6');
  },
}));
