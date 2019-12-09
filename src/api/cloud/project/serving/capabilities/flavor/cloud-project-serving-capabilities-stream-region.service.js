angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilitiesFlavor', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingCapabilitiesFlavorV6'),
  }));
