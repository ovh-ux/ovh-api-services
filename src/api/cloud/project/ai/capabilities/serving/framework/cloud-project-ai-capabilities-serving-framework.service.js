angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFramework', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFrameworkV6'),
  }));
