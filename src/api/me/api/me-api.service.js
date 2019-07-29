angular.module('ovh-api-services').service('OvhApiMeApi', $injector => ({
  Application() {
    return $injector.get('OvhApiMeApiApplication');
  },
  Credential() {
    return $injector.get('OvhApiMeApiCredential');
  },
}));
