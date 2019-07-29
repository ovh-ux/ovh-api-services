angular.module('ovh-api-services').service('OvhApiSmsUsersJobs', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsUsersJobsV6');
  },
}));
