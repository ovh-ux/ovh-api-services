angular.module('ovh-api-services').service('OvhApiMeVipStatus', $injector => ({
  v6() {
    return $injector.get('OvhApiMeVipStatusV6');
  },
}));
