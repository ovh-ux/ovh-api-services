angular.module('ovh-api-services').service('OvhApiStore', ($injector) => ({
  Contact() {
    return $injector.get('OvhApiStoreContact');
  },
  Document() {
    return $injector.get('OvhApiStoreDocument');
  },
  Partner() {
    return $injector.get('OvhApiStorePartner');
  },
}));
