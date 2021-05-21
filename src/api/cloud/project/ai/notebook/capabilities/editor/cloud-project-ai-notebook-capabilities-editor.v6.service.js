angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookCapabilitiesEditorV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/notebook/capabilities/editor', {
      serviceName: '@serviceName',
    });

    return resource;
  });
