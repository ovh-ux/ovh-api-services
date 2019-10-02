angular.module('ovh-api-services').service('OvhApiMeDocument', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeDocumentV6');
  },
}));
