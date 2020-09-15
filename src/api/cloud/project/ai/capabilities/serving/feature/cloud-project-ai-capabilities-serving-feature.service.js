angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFeature', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFeatureV6'),
  }));
