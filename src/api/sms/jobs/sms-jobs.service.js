angular.module('ovh-api-services').service('OvhApiSmsJobs', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsJobsV6');
  },
}));
