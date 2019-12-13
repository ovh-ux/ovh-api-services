angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingToken', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingTokenV6'),
  }));
