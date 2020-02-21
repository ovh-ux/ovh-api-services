angular.module('ovh-api-services').service('OvhApiOrderEmailDomain', ($injector) => ({
  v6() {
    return $injector.get('OvhApiOrderEmailDomainV6');
  },
}));
