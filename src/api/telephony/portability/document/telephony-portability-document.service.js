angular.module('ovh-api-services').service('OvhApiTelephonyPortabilityDocument', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyPortabilityDocumentV6');
  },
}));
