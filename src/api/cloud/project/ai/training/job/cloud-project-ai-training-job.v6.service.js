angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingJobV6', ($resource) => $resource('/cloud/project/:serviceName/ai/training/job/:jobId', {
    serviceName: '@serviceName',
    jobId: '@jobId',
  }, {
    kill: {
      method: 'POST',
      url: '/cloud/project/:serviceName/ai/training/job/:jobId/kill',
    },
    logs: {
      method: 'GET',
      url: '/cloud/project/:serviceName/ai/training/job/:jobId/logs',
    },
  }));
