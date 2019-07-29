angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersJobs', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsVirtualNumbersJobsV6');
  },
}));
