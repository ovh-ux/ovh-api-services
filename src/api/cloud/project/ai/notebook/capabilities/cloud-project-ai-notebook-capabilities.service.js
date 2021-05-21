angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookCapabilities', ($injector) => ({
    Editor: () => $injector.get('=Editor'),
    Framework: () => $injector.get('OvhApiCloudProjectAiNotebookCapabilitiesFramework'),
  }));
