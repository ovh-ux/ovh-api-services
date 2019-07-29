angular.module('ovh-api-services').service('OvhApiDBaasTs', $injector => ({
  v6() {
    return $injector.get('OvhApiDBaasTsV6');
  },
  Region() {
    return $injector.get('OvhApiDBaasTsRegion');
  },
  Project() {
    return $injector.get('OvhApiDBaasTsProject');
  },
}));
