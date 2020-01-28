angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingPresetImage', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingPresetImageV6'),
  }));
