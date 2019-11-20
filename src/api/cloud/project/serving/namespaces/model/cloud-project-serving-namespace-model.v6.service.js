angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespaceModelV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/model/:modelId', {
      serviceName: '@serviceName',
      namespaceId: '@namespaceId',
      modelId: '@modelId',
    }, {
      edit: {
        method: 'PUT',
      },
    });
    return resource;
  });
