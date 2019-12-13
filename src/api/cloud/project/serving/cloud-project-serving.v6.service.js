angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingV6', ($resource) => $resource('/cloud/project/:serviceName/ai/serving/:namespaceId', {
    serviceName: '@serviceName',
    namespaceId: '@namespaceId',
  }));
