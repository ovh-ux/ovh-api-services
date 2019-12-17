angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingJobs', ($injector) => ({
    iceberg: () => $injector.get('OvhApiCloudProjectDataProcessingJobsIceberg'),
  }));
