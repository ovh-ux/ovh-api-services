angular.module('ovh-api-services').service('OvhApiXdslRMA', $injector => ({
  v6() {
    return $injector.get('OvhApiXdslRMAV6');
  },
}));
