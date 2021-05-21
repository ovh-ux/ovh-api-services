angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiNotebookCapabilitiesFrameworkV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/notebook/capabilities/framework', {
      serviceName: '@serviceName',
    });

    return resource;
  });
