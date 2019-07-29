angular.module('ovh-api-services').service('OvhApiSupport', $injector => ({
  Iceberg() {
    return $injector.get('OvhApiSupportIceberg');
  },
  v6() {
    return $injector.get('OvhApiSupportV6');
  },
}));
