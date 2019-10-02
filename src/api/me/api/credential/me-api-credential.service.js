angular.module('ovh-api-services').service('OvhApiMeApiCredential', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeApiCredentialV6');
  },
}));
