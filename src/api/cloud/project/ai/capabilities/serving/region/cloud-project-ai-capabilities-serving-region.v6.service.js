angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingRegionV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/serving/region', {
      serviceName: '@serviceName',
    });

    return resource;
  });
