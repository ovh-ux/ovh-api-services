angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespaceV6', ($resource) => $resource('/cloud/project/:serviceName/ai/serving/:namespaceId', {
    serviceName: '@serviceName',
    namespaceId: '@namespaceId',
  }));
