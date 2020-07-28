angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingBackendV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/serving/backend', {
      serviceName: '@serviceName',
    });

    return resource;
  });
