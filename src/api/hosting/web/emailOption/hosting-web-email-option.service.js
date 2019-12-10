angular.module('ovh-api-services').service('OvhApiHostingWebEmailOption', ($injector) => ({
  v6() {
    return $injector.get('OvhApiHostingWebEmailOptionV6');
  },
}));
