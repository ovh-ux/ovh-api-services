angular.module('ovh-api-services').service('OvhApiDedicatedHousing', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedHousingV6');
  },
}));
