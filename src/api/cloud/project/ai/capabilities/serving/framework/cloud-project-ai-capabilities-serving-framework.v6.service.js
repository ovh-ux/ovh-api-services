angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFrameworkV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/serving/framework', {
      serviceName: '@serviceName',
    });

    return resource;
  });
