angular.module('ovh-api-services').service('OvhApiDBaasTsRegion', $injector => ({
  v6() {
    return $injector.get('OvhApiDBaasTsRegionV6');
  },
}));
