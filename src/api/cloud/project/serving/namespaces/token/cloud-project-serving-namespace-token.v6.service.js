angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespaceTokenV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/token/:tokenId', {
      serviceName: '@serviceName',
      namespaceId: '@namespaceId',
      tokenId: '@tokenId',
    }, {
      edit: {
        method: 'PUT',
      },
    });
    return resource;
  });
