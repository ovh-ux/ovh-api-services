angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingPresetImage', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingPresetImageV6'),
  }));
