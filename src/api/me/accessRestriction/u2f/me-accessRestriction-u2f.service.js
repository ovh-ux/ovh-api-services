angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionU2f', $injector => ({
  v6() {
    return $injector.get('OvhApiMeAccessRestrictionU2fV6');
  },
}));
