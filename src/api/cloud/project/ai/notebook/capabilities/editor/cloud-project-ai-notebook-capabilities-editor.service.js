angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookCapabilitiesEditor', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiNotebookCapabilitiesEditorV6'),
  }));
