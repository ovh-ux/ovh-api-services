angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFlavorV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/serving/flavor', {
      serviceName: '@serviceName',
    });

    return resource;
  });
