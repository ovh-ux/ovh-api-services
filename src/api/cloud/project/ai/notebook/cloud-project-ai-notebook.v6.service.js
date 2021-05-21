angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookV6', ($resource) => $resource('/cloud/project/:serviceName/ai/notebook/:notebookId', {
    serviceName: '@serviceName',
    notebookId: '@notebookId',
  }, {
    start: {
      method: 'PUT',
      url: '/cloud/project/:serviceName/ai/notebook/:notebookId/start',
    },
    stop: {
      method: 'PUT',
      url: '/cloud/project/:serviceName/ai/notebook/:notebookId/start',
    },
    log: {
      method: 'GET',
      url: '/cloud/project/:serviceName/ai/notebook/:notebookId/log',
    },
  }));
