angular.module('ovh-api-services').service('OvhApiDBaasTsProjectKey', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDBaasTsProjectKeyV6');
  },
}));
