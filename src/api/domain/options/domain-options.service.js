angular.module('ovh-api-services').service('OvhApiDomainOptions', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDomainOptionsV6');
  },
}));
