angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookCapabilities', ($injector) => ({
    Editor: () => $injector.get('OvhApiCloudProjectAiNotebookCapabilitiesEditor'),
    Framework: () => $injector.get('OvhApiCloudProjectAiNotebookCapabilitiesFramework'),
  }));
