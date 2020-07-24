angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingDataV6', ($resource) => $resource('/cloud/project/:serviceName/ai/training/data/:dataId', {
    serviceName: '@serviceName',
    dataId: '@dataId',
  }, {
    sync: {
      method: 'POST',
      url: '/cloud/project/:serviceName/ai/training/data/:dataId/sync',
    },
  }));
