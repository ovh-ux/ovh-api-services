angular.module('ovh-api-services').service('OvhApiXdslSpare', $injector => ({
  v6() {
    return $injector.get('OvhApiXdslSpareV6');
  },
}));
