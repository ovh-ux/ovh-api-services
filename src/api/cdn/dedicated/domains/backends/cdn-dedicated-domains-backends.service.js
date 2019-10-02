angular.module('ovh-api-services').service('OvhApiCdnDedicatedDomainsBackends', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCdnDedicatedDomainsBackendsV6');
  },
}));
