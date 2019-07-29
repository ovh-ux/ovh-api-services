angular.module('ovh-api-services').service('OvhApiTelephonyRedirect', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyRedirectV6');
  },
}));
