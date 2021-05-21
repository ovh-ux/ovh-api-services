angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebook', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiNotebookV6'),
    Capabilities: () => $injector.get('OvhApiCloudProjectAiNotebookCapabilities'),
  }));
