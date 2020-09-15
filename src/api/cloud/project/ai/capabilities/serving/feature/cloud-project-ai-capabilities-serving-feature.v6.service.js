angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFeatureV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/serving/feature', {
      serviceName: '@serviceName',
    });

    return resource;
  });
