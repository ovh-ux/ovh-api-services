angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookCapabilitiesFramework', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiNotebookCapabilitiesFrameworkV6'),
  }));
