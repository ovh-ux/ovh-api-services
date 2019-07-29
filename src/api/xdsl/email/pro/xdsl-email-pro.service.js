angular.module('ovh-api-services').service('OvhApiXdslEmailPro', $injector => ({
  v6() {
    return $injector.get('OvhApiXdslEmailProV6');
  },
}));
