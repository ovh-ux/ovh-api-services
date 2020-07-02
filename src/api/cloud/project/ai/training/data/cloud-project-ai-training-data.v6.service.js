angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingDataV6', ($resource) => $resource('/cloud/project/:serviceName/ai/training/data', {
    serviceName: '@serviceName',
  }));
