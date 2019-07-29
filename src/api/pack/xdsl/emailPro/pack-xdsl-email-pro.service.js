angular.module('ovh-api-services').service('OvhApiPackXdslEmailPro', $injector => ({
  v6() {
    return $injector.get('OvhApiPackXdslEmailProV6');
  },
}));
