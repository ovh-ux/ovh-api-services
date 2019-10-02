angular.module('ovh-api-services').service('OvhApiCloud', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudV6');
  },
  Aapi() {
    return $injector.get('OvhApiCloudAapi');
  },
  Price() {
    return $injector.get('OvhApiCloudPrice');
  },
  Project() {
    return $injector.get('OvhApiCloudProject');
  },
  PCA() {
    return $injector.get('OvhApiCloudPCA');
  },
}));
