angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationHypervisor', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudLocationHypervisorV6');
  },
}));
