angular.module('ovh-api-services').service('OvhApiTelephonyVxml', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyVxmlV6');
  },
}));
