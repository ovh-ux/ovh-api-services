angular.module('ovh-api-services').service('OvhApiConnectivityEligibilitySearch', $injector => ({
  v6() {
    return $injector.get('OvhApiConnectivityEligibilitySearchV6');
  },
}));
