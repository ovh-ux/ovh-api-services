angular.module('ovh-api-services').service('OvhApiServicesForm', ($injector) => ({
  v6() {
    return $injector.get('OvhApiServicesFormV6');
  },
}));
