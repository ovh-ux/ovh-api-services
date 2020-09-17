angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFeatureV6', ($resource) => $resource('/cloud/project/:serviceName/ai/capabilities/serving/feature', {
    serviceName: '@serviceName',
  }));
