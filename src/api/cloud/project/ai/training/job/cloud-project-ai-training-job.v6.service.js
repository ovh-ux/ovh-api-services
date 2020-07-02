angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingJobV6', ($resource) => $resource('/cloud/project/:serviceName/ai/training/job/:jobId', {
    serviceName: '@serviceName',
    jobId: '@jobId'
  }));
