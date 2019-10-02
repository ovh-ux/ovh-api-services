angular.module('ovh-api-services').service('OvhApiStoreDocument', ($injector) => ({
  v6() {
    return $injector.get('OvhApiStoreDocumentV6');
  },
}));
