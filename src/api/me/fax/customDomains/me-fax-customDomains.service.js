angular.module('ovh-api-services').service('OvhApiMeFaxCustomDomains', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeFaxCustomDomainsV6');
  },
}));
