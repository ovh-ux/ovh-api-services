angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilitiesPresetImage', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingCapabilitiesPresetImageV6'),
  }));
