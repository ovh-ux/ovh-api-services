angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingAuthorizationV6', ($resource) => $resource('/cloud/project/:serviceName/ai/authorization', {
    serviceName: '@serviceName',
  }, {
    save: {
      method: 'POST',
      hasBody: false,
    },
  }));
