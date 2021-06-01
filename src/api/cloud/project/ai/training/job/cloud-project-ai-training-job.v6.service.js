angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingJobV6', ($resource) => $resource('/cloud/project/:serviceName/ai/job/:jobId', {
    serviceName: '@serviceName',
    jobId: '@jobId',
  }, {
    kill: {
      method: 'PUT',
      url: '/cloud/project/:serviceName/ai/job/:jobId/kill',
    },
    log: {
      method: 'GET',
      url: '/cloud/project/:serviceName/ai/job/:jobId/log',
    },
  }));
